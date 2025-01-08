import { supabase } from './supabase';

export async function uploadProductImage(imageUrl: string, fileName: string) {
  try {
    // Fetch the image
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('product-images')
      .upload(fileName, blob, {
        contentType: 'image/jpeg',
        upsert: true
      });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}