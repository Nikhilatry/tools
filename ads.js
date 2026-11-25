 /**
         * Ad System Configuration
         */
        const manualAds = [
           /* {
                id: 'ad_top',
                slot: 'top-ad-slot',
                image: '', 
                title: 'Try our Premium Design Kit!',
                link: '#',
                type: 'banner'
            },*/
            {
                id: 'ad_middle',
                slot: 'middle-ad-slot',
                image: 'logo.png', 
                title: 'Ad here!',
                desc: 'To display your ads in this site click on claim offer to contact us.',
                link: 'contact-for-ad.html',
                type: 'rich'
            },
            {
                id: 'ad_phone',
                slot: 'phone-ad-slot',
                image: '',
                title: 'To display your ads contact us.',
                link: 'contact-for-ad.html',
                type: 'minimal'
            }
        ];

        function generateAdHTML(ad) {
            if (ad.type === 'rich') {
                return `
                    <div class="w-full max-w-4xl bg-white border border-slate-100 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-sm">
                        ${ad.image ? `<img src="${ad.image}" class="w-full md:w-32 h-32 object-cover rounded-xl" alt="Ad">` : ''}
                        <div class="text-center md:text-left">
                            <span class="text-slate-300 text-[10px] block mb-2 uppercase tracking-widest">Sponsored</span>
                            <h4 class="text-lg font-bold mb-1 text-slate-900">${ad.title}</h4>
                            <p class="text-slate-500 mb-4 text-sm">${ad.desc || ''}</p>
                            <a href="${ad.link}" class="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition">Claim Offer</a>
                        </div>
                    </div>
                `;
            } else if (ad.type === 'banner') {
                return `
                    <div class="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center justify-center gap-4">
                        <span class="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded uppercase font-bold">Ad</span>
                        <p class="text-sm text-blue-800 font-medium">${ad.title} <a href="${ad.link}" class="underline font-bold">Learn more</a></p>
                    </div>
                `;
            } else {
                return `
                    <div class="bg-slate-50 border border-slate-100 p-3 rounded-lg text-center">
                         <span class="text-[9px] text-slate-400 block uppercase">Advertisement</span>
                         <a href="${ad.link}" class="text-sm text-slate-700 font-medium hover:text-blue-600 transition">${ad.title}</a>
                    </div>
                `;
            }
        }

        function initializeAds() {
            manualAds.forEach(ad => {
                const slot = document.getElementById(ad.slot);
                if (slot) {
                    slot.innerHTML = generateAdHTML(ad);
                }
            });
            
            document.querySelectorAll('.ad-container').forEach(container => {
                if (container.innerHTML.trim() === '') {
                    container.style.display = 'none';
                }
            });
        }
 window.addEventListener('DOMContentLoaded', initializeAds);