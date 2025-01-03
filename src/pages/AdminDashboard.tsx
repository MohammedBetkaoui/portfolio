import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, LogOut, Sun, Moon } from 'lucide-react'; // Import des icônes Sun et Moon
import supabase from '../supabaseClient';

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false); // État pour le mode sombre
  const navigate = useNavigate();

  // Fonction pour charger les messages initiaux
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('contact')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching messages:', error.message);
    } else {
      setMessages(data || []);
    }
  };

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/login');
    } else {
      fetchMessages();
    }

    // Vérifier si l'utilisateur a déjà une préférence pour le mode sombre
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);

    // Appliquer ou enlever le mode sombre en fonction de la préférence de l'utilisateur
    if (savedMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Créer un canal pour écouter les événements en temps réel
    const contactChannel = supabase
      .channel('contact-channel')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'contact' }, (payload) => {
        const newMessage: Message = payload.new as Message;
        setMessages((prevMessages) => [newMessage, ...prevMessages]);
      })
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'contact' }, (payload) => {
        const deletedMessageId: number = payload.old.id;
        setMessages((prevMessages) =>
          prevMessages.filter((msg) => msg.id !== deletedMessageId)
        );
      })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'contact' }, (payload) => {
        const updatedMessage: Message = payload.new as Message;
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === updatedMessage.id ? updatedMessage : msg
          )
        );
      })
      .subscribe();

    return () => {
      supabase.removeChannel(contactChannel);
    };
  }, [navigate]);

  const handleDeleteMessage = async (id: number) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce message ?');
    if (!confirmDelete) return;

    const { error } = await supabase
      .from('contact')
      .delete()
      .eq('id', id);

    if (error) {
      setAlert({
        type: 'error',
        message: 'Une erreur est survenue lors de la suppression du message.',
      });
      setTimeout(() => setAlert(null), 3000);
    } else {
      setAlert({
        type: 'success',
        message: 'Message supprimé avec succès.',
      });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());

    // Ajouter ou supprimer la classe dark en fonction du mode
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Fonction pour détecter si le texte est en arabe
  const isArabic = (text: string): boolean => {
    const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
    return arabicRegex.test(text);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notification Alert */}
        {alert && (
          <div
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-md p-4 rounded-lg shadow-lg transition-all duration-300 ${
              alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            <div className="flex items-center justify-between">
              <span>{alert.message}</span>
              <button
                className="ml-4"
                onClick={() => setAlert(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Contact Messages
          </h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
            >
              {darkMode ? <Moon size={24} /> : <Sun size={24} />}
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-red-600"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
                  isArabic(message.message) ? 'text-right' : 'text-left'
                }`}
                dir={isArabic(message.message) ? 'rtl' : 'ltr'}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {message.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{message.email}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteMessage(message.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{message.message}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{message.created_at}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
