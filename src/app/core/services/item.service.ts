import { Injectable } from '@angular/core';
import { RecentItem } from '../models/recent-item.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const MAP_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJrtiv1qb0KO6nT9FvMHRdv_s6N9e5jWu4sG2qwInvKUdOQhO0GfRxJK1BumjUvFHpDbf3QxhvnTr-SPFjc36oGnMF7fM0-z4d1nfjJxNn4t_XryVuGOfeBr7M1mH5zOSN-msTvQDHCalpp4EemAeC4ZVunzD7Z6U2ponBQ_tiEAvE0J6qABd3nGYeHbaJ9Nhhx41gJpV_5amn3bBFBjdsh8HNBKGitm0d6Zcts1iJZW89OovWHOKih3vK4uUE_8G_trq8ZKBEHlQ';

const MOCK_ITEMS: RecentItem[] = [
  {
    id: 'keys-brooklyn-1',
    status: 'FOUND',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdDGG3JCUa8ccJ0t0MD1dLRCFE9PB8u-06jiCpPlzmoHhv1lbnnQIn05dRGGSozp6SDW6uRspf1gdWlNTXOzN9kjcFNsFX80OdYlfWg2iswr3O9EczWJUJXpZ7L9h_Z9y4eW5U6eqg1k6GsBJnK996N9wM3XVtlW3Kc8lSssBguaElAQcRaC4VzE04M_x31GOJkulH8B_ZlmZt0ZfWxxIFqhvqfjRb7fK49fh_66mNlNKmBWNDU7h_7QX4_bnrc2dNyXDsjqTbaVA',
    title: 'House Keys',
    time: '2h ago',
    description: 'Found near the subway entrance. Has a blue dolphin keychain.',
    location: 'Brooklyn, NY',
    verified: true,
    imageAlt: 'Found Keys',
    minHeight: '200px',
    dateFound: 'Oct 26, 2023 at 4:00 PM',
    category: 'Personal Items',
    color: 'Silver',
    aiConfidence: 92,
    mainImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdDGG3JCUa8ccJ0t0MD1dLRCFE9PB8u-06jiCpPlzmoHhv1lbnnQIn05dRGGSozp6SDW6uRspf1gdWlNTXOzN9kjcFNsFX80OdYlfWg2iswr3O9EczWJUJXpZ7L9h_Z9y4eW5U6eqg1k6GsBJnK996N9wM3XVtlW3Kc8lSssBguaElAQcRaC4VzE04M_x31GOJkulH8B_ZlmZt0ZfWxxIFqhvqfjRb7fK49fh_66mNlNKmBWNDU7h_7QX4_bnrc2dNyXDsjqTbaVA',
    mapImageUrl: MAP_IMAGE_URL
  },
  {
    id: 'dog-austin-1',
    status: 'LOST',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBGaTRm_PnmZaI8ppC-03hfg_4oxxoOBFkvjJvc434jgGRBHjovgnt0zv_htr9ti-Jh54oo65c8WXIgeEYaDuxWG37S8UTskpoI_Aa7zeInmjza0G2pb24nCFApyPFyKYktgR0xNsG3wF4Me1rDVI8i_UPmSW_0ja8LnqwmBpnGAHa1I8FSZD5aNVjnjTdxDZBZBYSTy2hWRGtifJQe1-wSbRk_rwMLnxgQ3IhfveB1VWx7ophRpnfaUFgDT16FdCXrFO1nkDjFV0',
    title: 'Golden Retriever',
    time: '5h ago',
    description: 'Lost my puppy "Max" near the park. He is wearing a red collar and is very friendly.',
    location: 'Austin, TX',
    ctaText: 'Help Find Max',
    imageAlt: 'Lost Puppy',
    minHeight: '240px',
    dateFound: 'Oct 26, 2023 at 1:00 PM',
    category: 'Pets',
    color: 'Gold',
    mainImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBGaTRm_PnmZaI8ppC-03hfg_4oxxoOBFkvjJvc434jgGRBHjovgnt0zv_htr9ti-Jh54oo65c8WXIgeEYaDuxWG37S8UTskpoI_Aa7zeInmjza0G2pb24nCFApyPFyKYktgR0xNsG3wF4Me1rDVI8i_UPmSW_0ja8LnqwmBpnGAHa1I8FSZD5aNVjnjTdxDZBZBYSTy2hWRGtifJQe1-wSbRk_rwMLnxgQ3IhfveB1VWx7ophRpnfaUFgDT16FdCXrFO1nkDjFV0',
    mapImageUrl: MAP_IMAGE_URL
  },
  {
    id: 'sneaker-gym-1',
    status: 'FOUND',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7FowFUeORArCQXmMc6DVXN90kZ_IMCO8QRy0ACfadsWVTnuvlcep6NJH1pvUGihErTjA3mAvfVwmhJJ2MlKW2In5HUmgk_QRF0W0C1jloeyiQ8Ps__uje8wQWdzWEtTpZN-pfdoJxK-gzDErgK9aAydeZPS42va_xLPWCUoHRGpABPfH1rpHSSc_Y2efiSXUwN95Z7Hh4S64_plUKYacc_QguDMwjsorHuk9OYRdEDpQM3iPPzFCYxMfoIsW_cy7pw6E4_4pW-CE',
    title: 'Red Sneaker',
    time: '1d ago',
    description: 'Found a single left shoe, size 10. Looks brand new.',
    location: 'Gym Locker',
    verified: false,
    imageAlt: 'Red Sneaker',
    minHeight: 'auto',
    dateFound: 'Oct 25, 2023',
    category: 'Apparel',
    color: 'Red',
    aiConfidence: 88,
    mainImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7FowFUeORArCQXmMc6DVXN90kZ_IMCO8QRy0ACfadsWVTnuvlcep6NJH1pvUGihErTjA3mAvfVwmhJJ2MlKW2In5HUmgk_QRF0W0C1jloeyiQ8Ps__uje8wQWdzWEtTpZN-pfdoJxK-gzDErgK9aAydeZPS42va_xLPWCUoHRGpABPfH1rpHSSc_Y2efiSXUwN95Z7Hh4S64_plUKYacc_QguDMwjsorHuk9OYRdEDpQM3iPPzFCYxMfoIsW_cy7pw6E4_4pW-CE',
    mapImageUrl: MAP_IMAGE_URL
  },
  {
    id: 'wallet-mainst-1',
    status: 'LOST',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_6_7oKIJFSH0vjX2wx0YxB3j3vrb3ojAeBygXg1WZAFoGmGwLyV_HGvzdvYuh3HGdVIzqo8rgpJjHvFNw5VOl2xyamV1u6X99RSbqAHmxr3idxGpot3VWXXq8aTWWxngKGiQNRKjvBO9SmZJbbbCH6POid6uNYivEttwVV4E1FFFXAbHLCcEr3iAK05LOM9m9l_MKackWprmAET0V_U5oH2KM-wqKPwNLYwJzSrhjWe-70sFCKkRvr3W2HRQi_olAmGv-pbwcLAI',
    title: 'Black Leather Wallet',
    time: '1d ago',
    description: 'Contains ID and credit cards. Name on ID is John Doe. Please return if found.',
    location: 'Main St.',
    ctaText: 'Details',
    imageAlt: 'Black Wallet',
    minHeight: 'auto',
    dateFound: 'Oct 25, 2023',
    category: 'Personal Accessories',
    color: 'Black',
    mainImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Cwo4YZSktJZN6udztZq5vVqdec-eXvWKZ4s4k6n9Mj_ew4DWQsN64gXrklPxdyzjsbTkkrMZ08ToATAzJCU0Bb6UhtTmcAMduS4u82a4mA8D41sycTk9-aaMnZ_s3cNdI3vgjKy5HH6ZXismbVdR9AKV8OHKN-_9RVyvYwAhpfbigjXftIoSXo4QKeAVurjXPCXGfu-95VsHYebV2FfTaQkb_aG2mbuoUr9AY55CjIDhTLa3Hufr7YC3cD-LdG9r3qVE9QPHXbE',
    mapImageUrl: MAP_IMAGE_URL
  },
  {
    id: 'book-campus-1',
    status: 'FOUND',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANvdkNZrl2a7lT-t8U5tSe-9H5bmdo-byIu9kiwScxxM3eKJVLcL1oxmDEOogBn7y8GSy-FF3QMzaOeRDOT_xVA1uBYhASLMncXZ_TjHugCi2Oz8kQKob49YQ4Mp0EzWfHYtdJ2W7PBI7_QnScZFjJyLi_ni5SkdVZc-8ywFzmwJBP-K-satYAvcdsYzZ65B0XiDcqn_3j8NEsBJsGkaLebd72gyJjO6SJ51ZzhM5By4EWgJ2nrRPnerTGn1WaPL9wyS5ZVgxLROY',
    title: 'Bio 101 Textbook',
    time: '2d ago',
    description: 'Biology 101 textbook left in the library study room 3B.',
    location: 'Campus Lib',
    verified: true,
    imageAlt: 'Textbook',
    minHeight: 'auto',
    dateFound: 'Oct 24, 2023',
    category: 'Books',
    color: 'Blue',
    aiConfidence: 98,
    mainImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANvdkNZrl2a7lT-t8U5tSe-9H5bmdo-byIu9kiwScxxM3eKJVLcL1oxmDEOogBn7y8GSy-FF3QMzaOeRDOT_xVA1uBYhASLMncXZ_TjHugCi2Oz8kQKob49YQ4Mp0EzWfHYtdJ2W7PBI7_QnScZFjJyLi_ni5SkdVZc-8ywFzmwJBP-K-satYAvcdsYzZ65B0XiDcqn_3j8NEsBJsGkaLebd72gyJjO6SJ51ZzhM5By4EWgJ2nrRPnerTGn1WaPL9wyS5ZVgxLROY',
    mapImageUrl: MAP_IMAGE_URL
  },
  {
    id: 'bear-airport-1',
    status: 'LOST',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3CjJxF6_iY0q7Xd7TC9IJ_sQz8uCBJKtdyTdWf6gPtTR9kcqOFJ79jENBZ3wLDsHTvn6f7mGEH5SX2ZGich9o7cJCrHPr0_dq9Dl8XJ58kPtd92gEX1EnMcwPiAXyULKdqOVPTtuiaPT2OM7mRUdVowOH78e949SGoLIJN83gPdZo2DOUzGK9bsfqHniONpqraU-cx4ZgQBJ3IIRxyTEsIxI_LCZR65SE7X33mtHJQAVzX2vUuznGd_I7YgZiDjY8VrhWXKsGRbA',
    title: 'Brown Teddy Bear',
    time: '2d ago',
    description: "My daughter's favorite brown teddy bear. Well loved, missing an eye.",
    location: 'Airport T2',
    ctaText: 'Help',
    imageAlt: 'Teddy Bear',
    minHeight: 'auto',
    dateFound: 'Oct 24, 2023',
    category: 'Toys',
    color: 'Brown',
    mainImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3CjJxF6_iY0q7Xd7TC9IJ_sQz8uCBJKtdyTdWf6gPtTR9kcqOFJ79jENBZ3wLDsHTvn6f7mGEH5SX2ZGich9o7cJCrHPr0_dq9Dl8XJ58kPtd92gEX1EnMcwPiAXyULKdqOVPTtuiaPT2OM7mRUdVowOH78e949SGoLIJN83gPdZo2DOUzGK9bsfqHniONpqraU-cx4ZgQBJ3IIRxyTEsIxI_LCZR65SE7X33mtHJQAVzX2vUuznGd_I7YgZiDjY8VrhWXKsGRbA',
    mapImageUrl: MAP_IMAGE_URL
  },
  {
    id: 'iphone-downtown-1',
    status: 'FOUND',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClcOEgj-xbcHD7pEFT9x6Xttc3U_ncYA3iDZ6qEyc_wuPQExKXcszCChC-BCl__B_7libcwfUvQlkXG_uhyrAW-l2Mc7728fbmg_xrqQ11tuBPYczwYYLr3Sy0VEAmqb4hRGK4XcfqsqFPZ3r8OvpmdfVobq8h2Jxk7y7ySlfi_JGLZ2N3xd_GkgGh8AvJZ8Ux2Np8z3i9Zk45gMnpmJO_j3q1sHd-6G3cHp-hrAAX5YJhx0cqWvhIzD0fjBaHPg01A9PacDNdngo',
    title: 'iPhone 13',
    time: '3d ago',
    description: 'Found in the cafe restroom. Locked with a picture of a dog on the screen.',
    location: 'Downtown',
    verified: true,
    imageAlt: 'iPhone',
    minHeight: 'auto',
    dateFound: 'Oct 23, 2023',
    category: 'Electronics',
    color: 'Midnight Blue',
    aiConfidence: 99,
    mainImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClcOEgj-xbcHD7pEFT9x6Xttc3U_ncYA3iDZ6qEyc_wuPQExKXcszCChC-BCl__B_7libcwfUvQlkXG_uhyrAW-l2Mc7728fbmg_xrqQ11tuBPYczwYYLr3Sy0VEAmqb4hRGK4XcfqsqFPZ3r8OvpmdfVobq8h2Jxk7y7ySlfi_JGLZ2N3xd_GkgGh8AvJZ8Ux2Np8z3i9Zk45gMnpmJO_j3q1sHd-6G3cHp-hrAAX5YJhx0cqWvhIzD0fjBaHPg01A9PacDNdngo',
    mapImageUrl: MAP_IMAGE_URL
  },
  {
    id: 'sunglasses-bus-1',
    status: 'LOST',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGbXvBNTuYEqkRgdQoYeVb__j5yHWwrKL7Xd1dq-djDbHIis1dnETyKHTZpMDJ4M8h7zwWu4YXzyVHjGQK8HV3P1-yiPdE8Ymyf07DwCrUkSZRT2Gw7ZbXk2g8MCQ71h7nETT1GFyiMIzsCISxCglg8sW7VwEAg4pVnqsGdb6M01p9h4LiqyYoveURMYMMDmQlr9hBDuYJir2asrZh-aaZ7dA5wN8b1uxccL4oy6T9YOZcbB6Z0JB_KB98c7iUYL3nZj1v5jHM2o4',
    title: 'RayBan Sunglasses',
    time: '3d ago',
    description: 'Left them on the bus #42 yesterday evening. Black frames.',
    location: 'City Bus',
    ctaText: 'Details',
    imageAlt: 'Sunglasses',
    minHeight: 'auto',
    dateFound: 'Oct 23, 2023',
    category: 'Personal Accessories',
    color: 'Black',
    mainImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGbXvBNTuYEqkRgdQoYeVb__j5yHWwrKL7Xd1dq-djDbHIis1dnETyKHTZpMDJ4M8h7zwWu4YXzyVHjGQK8HV3P1-yiPdE8Ymyf07DwCrUkSZRT2Gw7ZbXk2g8MCQ71h7nETT1GFyiMIzsCISxCglg8sW7VwEAg4pVnqsGdb6M01p9h4LiqyYoveURMYMMDmQlr9hBDuYJir2asrZh-aaZ7dA5wN8b1uxccL4oy6T9YOZcbB6Z0JB_KB98c7iUYL3nZj1v5jHM2o4',
    mapImageUrl: MAP_IMAGE_URL
  }
];

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getItems(): Observable<RecentItem[]> {
    return of(MOCK_ITEMS);
  }

  getItemById(id: string): Observable<RecentItem | undefined> {
    return this.getItems().pipe(
      map(items => items.find(item => item.id === id))
    );
  }
}