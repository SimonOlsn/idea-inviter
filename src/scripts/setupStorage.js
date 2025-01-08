import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import fetch from 'node-fetch';

config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function uploadProductImage(imageUrl, fileName) {
  try {
    // Fetch the image
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const { data, error } = await supabase.storage
      .from('Gfiex')
      .upload(fileName, blob, {
        contentType: 'image/jpeg',
        upsert: true
      });

    if (error) {
      throw error;
    }

    console.log('Image uploaded successfully:', data);
    return data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}

async function setupStorage() {
  try {
    // Upload the smart switch image
    await uploadProductImage(
      'https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80',
      'smart-switch-pro.jpg'
    );

    console.log('Storage setup completed successfully');
  } catch (error) {
    console.error('Error setting up storage:', error);
  }
}

setupStorage();