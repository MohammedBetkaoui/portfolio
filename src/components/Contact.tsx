import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, XCircle } from 'lucide-react';
import supabase from '../supabaseClient';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [i18n]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact')
        .insert([{ name: formData.name, email: formData.email, message: formData.message }]);

      if (error) {
        throw new Error(error.message);
      }

      setSuccessMessage(t('contact.success_message'));
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error: any) {
      setErrorMessage(error.message || t('contact.error_message'));
      setTimeout(() => setErrorMessage(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 transition-transform duration-500 hover:scale-105">
          {t('contact.title')}
        </h2>

        {/* Contenu en 2 Colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informations de Contact */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {t('contact.contact_information')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('contact.contact_intro')}
            </p>
            <div className="space-y-4">
              <a
                href="mailto:mohammed.betkaoui@univ-bba.dz"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Mail className="w-6 h-6 mr-3" />
                mohammed.betkaoui@univ-bba.dz
              </a>
              <a
                href="https://github.com/MohammedBetkaoui"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Github className="w-6 h-6 mr-3" />
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-betkaoui-b005342a5/"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6 mr-3" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Formulaire de Contact */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white p-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white p-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300"
              >
                {isSubmitting ? t('contact.sending') : t('contact.send_message')}
              </button>
              {successMessage && (
                <p className="text-green-600 mt-4 flex items-center">
                  <CheckCircle className="mr-2" /> {successMessage}
                </p>
              )}
              {errorMessage && (
                <p className="text-red-600 mt-4 flex items-center">
                  <XCircle className="mr-2" /> {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
