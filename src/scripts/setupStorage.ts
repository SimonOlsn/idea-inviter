import { supabase } from '../utils/supabase';
import { uploadProductImage } from '../utils/uploadImage';

async function setupStorage() {
  try {
    // Create product-images bucket if it doesn't exist
    const { data: buckets, error: bucketsError } = await supabase
      .storage
      .listBuckets();

    if (bucketsError) {
      throw bucketsError;
    }

    const bucketExists = buckets.some(bucket => bucket.name === 'product-images');

    if (!bucketExists) {
      const { error: createError } = await supabase
        .storage
        .createBucket('product-images', {
          public: true,
          fileSizeLimit: 1024 * 1024 * 2 // 2MB limit
        });

      if (createError) {
        throw createError;
      }
    }

    // Upload the smart switch image
    await uploadProductImage(
      'https://unsplash.com/photos/white-wall-switch-ynfmVbvunQU',
      'smart-switch-pro.jpg'
    );

    console.log('Storage setup completed successfully');
  } catch (error) {
    console.error('Error setting up storage:', error);
  }
}

setupStorage();