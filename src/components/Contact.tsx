import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
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
      const { data, error } = await supabase
        .from('contact')
        .insert([{ name: formData.name, email: formData.email, message: formData.message }]);

      if (error) {
        throw new Error(error.message);
      }

      setSuccessMessage(t('contact.success_message'));
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      setErrorMessage(error.message || t('contact.error_message'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          {t('contact.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Informations de contact */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('contact.contact_information')}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('contact.contact_intro')}
            </p>
            <div className="space-y-4">
              <a href="mailto:mohammed.betkaoui@univ-bba.dz" className="flex items-center gap-4 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail className="w-7 h-7 text-blue-500" />
                <span className="text-lg text-gray-700 dark:text-gray-300">mohammed.betkaoui@univ-bba.dz</span>
              </a>
              <a href="https://github.com/MohammedBetkaoui" className="flex items-center gap-4 hover:text-blue-600 dark:hover:text-blue-400">
                <Github className="w-7 h-7 text-blue-500" />
                <span className="text-lg text-gray-700 dark:text-gray-300">GitHub Profile</span>
              </a>
              <a href="https://www.linkedin.com/in/mohammed-betkaoui-b005342a5/" className="flex items-center gap-4 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin className="w-7 h-7 text-blue-500" />
                <span className="text-lg text-gray-700 dark:text-gray-300">LinkedIn Profile</span>
              </a>
            </div>
          </div>
          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="mt-2 block w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 rounded-lg flex items-center justify-center gap-2">
              {isSubmitting ? t('contact.sending') : t('contact.send_message')}
              <Send size={24} />
            </button>
            {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;