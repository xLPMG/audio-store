import { Injectable } from '@angular/core';
import { Product } from '../data/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const products = [
      {
        id: 1,
        name: 'Bose QuietComfort Ultra Earbuds',
        brand: 'Bose',
        price: 349.95,
        category: ['earphone','bluetooth','noise-cancelling','new'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qcue-headphonein/product_silo_images/AEM_PDP_GALLERY_BLACK-1.png/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 2,
        name: 'Bose QuietComfort Earbuds II',
        brand: 'Bose',
        price: 279.95,
        category: ['earphone','bluetooth','noise-cancelling'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds_ii/product_silo_image/CTP-36312_ECOM_QCEII_Triple_Black_2_CNET.png/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 3,
        name: 'Bose QuietComfort Ultra Kopfhörer',
        brand: 'Bose',
        price: 499.95,
        category: ['headphone','bluetooth','noise-cancelling','new'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/QCUH-HEADPHONEARN/product_silo_images/QCUHLE24_GALLERY_AEM-1_01.png/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 4,
        name: 'Bose QuietComfort Headphones',
        brand: 'Bose',
        price: 349.95,
        category: ['headphone','bluetooth','noise-cancelling','new'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc-headphonearn/product_silo_image/AEM_qc-headphonearn_PDP_GALLERY_CYPRESS-GREEN-1.png/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 5,
        name: 'Bose QuietComfort 45 Headphones ',
        brand: 'Bose',
        price: 349.95,
        category: ['headphone','bluetooth','noise-cancelling'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45_PDP_Ecom-Gallery-B02.jpg/jcr:content/renditions/cq5dam.web.1000.1000.jpeg'
      },
      {
        id: 6,
        name: 'Bose QuietComfort SE headphones',
        brand: 'Bose',
        price: 244.95,
        category: ['headphone','bluetooth','noise-cancelling'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_se/product_silo_images/QC45_PDP_Ecom-Gallery-B02.png/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 7,
        name: 'Bose A30 Aviation Headset',
        brand: 'Bose',
        price: 1439.95,
        category: ['headphone','aviation'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/a30-aviation-headset/product_silo_images/Aviation_Headset_A30_3Quarters_Left_2.png/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 8,
        name: 'Bose SoundLink Micro Bluetooth Speaker',
        brand: 'Bose',
        price: '119.95',
        category: ['speaker','bluetooth','portable'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_micro/product_silo_images/soundlink_micro_midnight_blue_EC_hero.jpg/jcr:content/renditions/cq5dam.web.1000.1000.jpeg'
      },
      {
        id: 9,
        name: 'Bose SoundLink Flex Bluetooth Speaker',
        brand: 'Bose',
        price: '174.95',
        category: ['speaker','bluetooth','portable'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_flex/product_silo_images/SLF_PDP_Ecom-Gallery-B01.png/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 10,
        name: 'Bose SoundLink Mini II – Special Edition',
        brand: 'Bose',
        price: '159.95',
        category: ['speaker','bluetooth','portable','new'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_mini_ii/product_silo_images/slmiise_black_EC_hero.PNG/jcr:content/renditions/cq5dam.web.1280.1280.png'
      },
      {
        id: 11,
        name: 'Bose Portable Smart Speaker',
        brand: 'Bose',
        price: '384.95',
        category: ['speaker','bluetooth','portable'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose_portable_home_speaker/product_silo_images/bose_portable_home_speaker_black_custom_silo.png/jcr:content/renditions/cq5dam.web.1280.1280.png'
      },
      {
        id: 12,
        name: 'Bose SoundLink Revolve II Bluetooth Speaker',
        brand: 'Bose',
        price: '229.95',
        category: ['speaker','bluetooth','portable','new'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_revolve_ii/product_silo_images/soundlink_revolve_lux_gray_EC_01.psd/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 13,
        name: 'Bose S1 Pro+ Portable Bluetooth Speaker System',
        brand: 'Bose',
        price: '799.95',
        category: ['speaker','bluetooth','portable'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/S1PROP-SPEAKERWIRELESS/product-images/s1_pro_plus_0_gallery_01.png/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 14,
        name: 'Companion 2 Series III multimedia speaker system',
        brand: 'Bose',
        price: '149.95',
        category: ['speaker','computer'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/companion_2_series_iii_multimedia_speaker_system/product_silo_images/companion2_black_EC.psd/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 15,
        name: 'Bose Smart Ultra Soundbar',
        brand: 'Bose',
        price: '999.95',
        category: ['speaker','soundbar','new'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/SUSB-SOUNDBAR/product_silo_images/STEVIE_LAUNCH_AEM_PDP_ECOMGALLERY_BLACK_04.jpg/jcr:content/renditions/cq5dam.web.1000.1000.jpeg'
      },
      {
        id: 16,
        name: 'Bose Smart Soundbar 900',
        brand: 'Bose',
        price: '849.95',
        category: ['speaker','soundbar'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose_smart_soundbar_900/product_silo_images/Angus_Ecomm_Gallery_3_Black.jpg/jcr:content/renditions/cq5dam.web.1000.1000.jpeg'
      },
      {
        id: 17,
        name: 'Bose Solo Soundbar Series II',
        brand: 'Bose',
        price: '149.95',
        category: ['speaker','soundbar'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/solo_soundbar_series_II-/product_silo_images/SOLOII_001_RGB.png/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 18,
        name: 'Bose Bass Module 500',
        brand: 'Bose',
        price: '399.95',
        category: ['speaker','bass-module'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/accessories/speakers/bose_bass_module_500/product_silo_images/bose_bass_module_500_black_EC_hero.psd/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 19,
        name: 'Bose Bass Module 700',
        brand: 'Bose',
        price: '729.95',
        category: ['speaker','bass-module'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/accessories/speakers/bose_bass_module_700/product_silo_images/bose_bass_module_700_black_EC_hero.psd/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 20,
        name: 'Bose Surround Speakers',
        brand: 'Bose',
        price: '354.95',
        category: ['speaker','surround'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/accessories/speakers/bose_surround_speakers/product_silo_images/bose_surround_speakers_black_EC_hero.psd/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 21,
        name: 'Bose Surround Speakers 700',
        brand: 'Bose',
        price: '544.95',
        category: ['speaker','surround'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose_surround_speakers_700/product_silo_image/bose_surround_speakers_700_black_EC_hero.psd/jcr:content/renditions/cq5dam.web.1000.1000.png'
      },
      {
        id: 22,
        name: 'Bose Music Amplifier ',
        brand: 'Bose',
        price: '704.95',
        category: ['amplifier'],
        description: '',
        imagePath: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose-music-amplifier/product-silo/CTP-37333_PDP_ECOM_BMA_3.jpg/jcr:content/renditions/cq5dam.web.1000.1000.jpeg'
      }
      ];
    return {products};
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
  }
}