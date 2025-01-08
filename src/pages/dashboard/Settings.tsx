import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const settingsSchema = z.object({
  notifications: z.object({
    email: z.boolean(),
    push: z.boolean(),
    powerAlerts: z.boolean(),
    updates: z.boolean(),
  }),
  preferences: z.object({
    theme: z.enum(['light', 'dark', 'system']),
    timezone: z.string(),
    temperature: z.enum(['celsius', 'fahrenheit']),
  }),
  security: z.object({
    twoFactor: z.boolean(),
    sessionTimeout: z.number().min(15).max(120),
  }),
});

type SettingsFormData = z.infer<typeof settingsSchema>;

const defaultValues: SettingsFormData = {
  notifications: {
    email: true,
    push: true,
    powerAlerts: true,
    updates: false,
  },
  preferences: {
    theme: 'system',
    timezone: 'UTC',
    temperature: 'celsius',
  },
  security: {
    twoFactor: false,
    sessionTimeout: 30,
  },
};

export const Settings: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues,
  });

  const onSubmit = (data: SettingsFormData) => {
    console.log('Settings updated:', data);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Email Notifications
                </label>
                <input
                  type="checkbox"
                  {...register('notifications.email')}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Push Notifications
                </label>
                <input
                  type="checkbox"
                  {...register('notifications.push')}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Theme
                </label>
                <select
                  {...register('preferences.theme')}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Temperature Unit
                </label>
                <select
                  {...register('preferences.temperature')}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="celsius">Celsius</option>
                  <option value="fahrenheit">Fahrenheit</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Security</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Two-Factor Authentication
                </label>
                <input
                  type="checkbox"
                  {...register('security.twoFactor')}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Session Timeout (minutes)
                </label>
                <input
                  type="number"
                  {...register('security.sessionTimeout', { valueAsNumber: true })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  min="15"
                  max="120"
                />
                {errors.security?.sessionTimeout && (
                  <p className="mt-1 text-sm text-red-600">
                    Session timeout must be between 15 and 120 minutes
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};