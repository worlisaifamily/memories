document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.getElementById("eventGrid");
    const yearFilter = document.getElementById("yearFilter");
    const monthFilter = document.getElementById("monthFilter");
    const searchInput = document.getElementById("search");
    const clearFiltersBtn = document.getElementById("clearFilters");
    const prevPageBtn = document.getElementById("prevPage");
    const nextPageBtn = document.getElementById("nextPage");
    const pageNumberDisplay = document.getElementById("pageNumber");

    let currentPage = 1;
    const eventsPerPage = 20; // Adjust the number of events per page

    // Events Data
 const events = [
    { title: "Aradhana Day Maha Narayan Seva - 26th April 2025", year: "2025", month: "April", image: "DownloadedPhotos/Aradhana_Day_Maha_Narayan_Seva_-_26th_April_2025/img2.jpg", link: "https://photos.app.goo.gl/pnzYSmvft6Tzip168" },
    { title: "Aradhana Day Special Nagarsankirtan - 24th April 2025 ", year: "2025", month: "April", image: "DownloadedPhotos/Aradhana_Day_Special_Nagarsankirtan_-_24th_April_2025/img3.jpg", link: "https://photos.app.goo.gl/SimiNo3heMZemMwk7" },
    { title: "Monthly Narayan Seva - 19th April 2025", year: "2025", month: "April", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_19th_April_2025/img3.jpg", link: "https://photos.app.goo.gl/kL37Xd1Kustb9vDw9" },
    { title: "Ladies Day Celebrations - 19th April 2025", year: "2025", month: "April", image: "DownloadedPhotos/Ladies_Day_Celebrations_-_19th_April_2025/img3.jpg", link: "https://photos.app.goo.gl/qDH1ytJVBSmbraWh8" },
    { title: "Residential bhajan at Saismita Ghosh’s residence - 13th April 2025", year: "2025", month: "April", image: "DownloadedPhotos/Residential_bhajan_at_Saismita_Ghosh’s_residence_-_13th_April_2025/img5.jpg", link: "https://photos.app.goo.gl/ooUnZQbAg6E6hViRA" },
    { title: "Sri Rama Navami Special Nagarsankirtan - 6th April 2025", year: "2025", month: "April", image: "DownloadedPhotos/Sri_Rama_Navami_Special_Nagarsankirtan_-_6th_April_2025/img5.jpg", link: "https://photos.app.goo.gl/fdhTh1j1hqkP7CrP8" },
    { title: "Ugadi Special Nagarsankirtan - 30th March 2025", year: "2025", month: "March", image: "DownloadedPhotos/Ugadi_Special_Nagarsankirtan_-_30th_March_2025/img5.jpg", link: "https://photos.app.goo.gl/vCgHZysXv4UJVz5r6" },
    { title: "Residential bhajan at Yashaswee Duvva’s residence - 23rd March 2025", year: "2025", month: "March", image: "DownloadedPhotos/Residential_bhajan_at_Yashaswee_Duvva’s_residence_-_23rd_March_2025/img5.jpg", link: "https://photos.app.goo.gl/Ykcavzf83deEmJd89" },
    { title: "Monthly Narayan Seva - 22nd Mar 2025", year: "2025", month: "March", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_22nd_Mar_2025/img2.jpg", link: "https://photos.app.goo.gl/JFeLzHdQmFsYUXNHA" },
    { title: "Ladies Day Celebrations - 19th March 2025", year: "2025", month: "March", image: "DownloadedPhotos/Ladies_Day_Celebrations_-_19th_March_2025/img5.jpg", link: "https://photos.app.goo.gl/HTpDP4JhjQEAhLBW6" },
    { title: "Ekadasha Rudrabhishekam - 23rd Feb 2025", year: "2025", month: "February", image: "DownloadedPhotos/Ekadasha_Rudrabhishekam_-_23rd_Feb_2025/img4.jpg", link: "https://photos.app.goo.gl/5JqQ6PhmQ9jco3qu9" },
    { title: "Gayatri Havan at Smt Indira Gone’s residence - 22nd Feb 2025", year: "2025", month: "February", image: "DownloadedPhotos/Gayatri_Havan_at_Smt_Indira_Gone’s_residence_-_22nd_Feb_2025/img1.jpg", link: "https://photos.app.goo.gl/jtH9Ng4vtfBimXEeA" },
    { title: "Residential bhajan at Sriyan Siripuram’s residence - 16th Feb 2025", year: "2025", month: "February", image: "DownloadedPhotos/Residential_bhajan_at_Sriyan_Siripuram’s_residence_-_16th_Feb_2025/img2.jpg", link: "https://photos.app.goo.gl/4vF6YofH6ZTvhFH78" },
    { title: "Weekly Medical Camp - 15th Feb 2025", year: "2025", month: "February", image: "DownloadedPhotos/Weekly_Medical_Camp_-_15th_Feb_2025/img1.jpg", link: "https://photos.app.goo.gl/vtUpXq2Y6htLzfGDA" },
    { title: "Monthly Narayan Seva - 15th Feb 2025", year: "2025", month: "February", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_15th_Feb_2025/img2.jpg", link: "https://photos.app.goo.gl/gUPGrDNuoavw4nod9" },
    { title: "Ladies Day Celebrations - 19th Jan 2025", year: "2025", month: "January", image: "DownloadedPhotos/Ladies_Day_Celebrations_-_19th_Jan_2025/img2.jpg", link: "https://photos.app.goo.gl/GR3g2DCVjeHwRavo6" },
    { title: "Narayan Seva 18th Jan 2025", year: "2025", month: "January", image: "DownloadedPhotos/Narayan_Seva_18th_Jan_2025/img2.jpg", link: "https://photos.app.goo.gl/1MbPTnCDHJCtcAGh6" },
    { title: "Gayatri Havan at Shri Pothu Sudarshan’s Residence - 13th Jan 2025", year: "2025", month: "January", image: "DownloadedPhotos/Gayatri_Havan_at_Shri_Pothu_Sudarshan’s_Residence_-_13th_Jan_2025/img1.jpg", link: "https://photos.app.goo.gl/AHZgPBvEhop9j79n7" },
    { title: "Medical camp - 4th Jan 2025", year: "2025", month: "January", image: "DownloadedPhotos/Medical_camp_-_4th_Jan_2025/img4.jpg", link: "https://photos.app.goo.gl/cZ2Z6gCLK8rL5Lts9" },
    { title: "Maha Narayan Seva - 30th Nov 2024", year: "2024", month: "November", image: "DownloadedPhotos/Maha_Narayan_Seva_-_30th_Nov_2024/img4.jpg", link: "https://photos.app.goo.gl/eATWzSqE35LoiGFv8" },
    { title: "99th Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 24th Nov 2024", year: "2024", month: "November", image: "DownloadedPhotos/99th_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_24th_Nov_2024/img1.jpg", link: "https://photos.app.goo.gl/pnLW7DLadHZCtERm6" },
    { title: "Special Nagarsankirtan and Cake Cutting on 99th Birthday of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2024", year: "2024", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_99th_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2024/img2.jpg", link: "https://photos.app.goo.gl/iqMB1x4Ta1nZC7xw8" },
    { title: "99 Bhajan Pushpanjali - 16th Nov 2024", year: "2024", month: "November", image: "DownloadedPhotos/99_Bhajan_Pushpanjali_-_16th_Nov_2024/img3.jpg", link: "https://photos.app.goo.gl/mRHneUifiSmNFTCc8" },
    { title: "Gayatri Havan at Shri Boga Prakash’s Residence - 10th Oct 2024", year: "2024", month: "October", image: "DownloadedPhotos/Gayatri_Havan_at_Shri_Boga_Prakash’s_Residence_-_10th_Oct_2024/img4.jpg", link: "https://photos.app.goo.gl/RuzKZKkqSRfWap7H9" },
    { title: "Swacchata Se Divyata Tak - SSSSO MH W1 - District 1 - 5th Oct 2024", year: "2024", month: "October", image: "DownloadedPhotos/Swacchata_Se_Divyata_Tak_-_SSSSO_MH_W1_-_District_1_-_5th_Oct_2024/img3.jpg", link: "https://photos.app.goo.gl/9drznmym1FDEEfb28" },
    { title: "Monthly Narayan Seva - 14th Sept 2024", year: "2024", month: "September", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_14th_Sept_2024/img4.jpg", link: "https://photos.app.goo.gl/iZbMWnxWJJMRUQtP8" },
    { title: "Maha Mrityunjaya Dhanvantri Mantra Japa Lingabhishekam Shri Rajanna Mittapelli’s residence - 31st August 2024", year: "2024", month: "August", image: "DownloadedPhotos/Maha_Mrityunjaya_Dhanvantri_Mantra_Japa_Lingabhishekam_Shri_Rajanna_Mittapelli’s_residence_-_31st_August_2024/img2.jpg", link: "https://photos.app.goo.gl/hjQk9WZR81tuWeTVA" },
    { title: "Monthly Narayan Seva - 31st Aug 2024", year: "2024", month: "August", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_31st_Aug_2024/img4.jpg", link: "https://photos.app.goo.gl/5Su7geZS2DPMhWCU9" },
    { title: "Maha Mrityunjaya Dhanvantri Mantra Japa Lingabhishekam Shri Gangarajam Gundeti’s residence - 24th August 2024", year: "2024", month: "August", image: "DownloadedPhotos/Maha_Mrityunjaya_Dhanvantri_Mantra_Japa_Lingabhishekam_Shri_Gangarajam_Gundeti’s_residence_-_24th_August_2024/img1.jpg", link: "https://photos.app.goo.gl/DAmNzsrUuPBbdfhA8" },
    { title: "Maha Mrityunjaya Dhanvantri Mantra Japa Lingabhishekam Shri Anoop Saxena’s residence - 23rd August 2024", year: "2024", month: "August", image: "DownloadedPhotos/Maha_Mrityunjaya_Dhanvantri_Mantra_Japa_Lingabhishekam_Shri_Anoop_Saxena’s_residence_-_23rd_August_2024/img5.jpg", link: "https://photos.app.goo.gl/dGXShqQJm7YxgezbA" },
    { title: "Maha Mrityunjaya Dhanvantri Mantra Japa Lingabhishekam Shri Venkatesh Anumandala’s residence - 17th August 2024", year: "2024", month: "August", image: "DownloadedPhotos/Maha_Mrityunjaya_Dhanvantri_Mantra_Japa_Lingabhishekam_Shri_Venkatesh_Anumandala’s_residence_-_17th_August_2024/img4.jpg", link: "https://photos.app.goo.gl/WJAkKvZh81g7QYpu7" },
    { title: "Sri Sathya Sai Varalaxmi Vratam - 16th August 2024", year: "2024", month: "August", image: "DownloadedPhotos/Sri_Sathya_Sai_Varalaxmi_Vratam_-_16th_August_2024/img3.jpg", link: "https://photos.app.goo.gl/R34AxEdErHmEzqSB7" },
    { title: "Maha Mrityunjaya Dhanvantri Mantra Japa Lingabhishekam Smt. Devakka Vuradi’s residence - 10th August 2024", year: "2024", month: "August", image: "DownloadedPhotos/Maha_Mrityunjaya_Dhanvantri_Mantra_Japa_Lingabhishekam_Smt._Devakka_Vuradi’s_residence_-_10th_August_2024/img3.jpg", link: "https://photos.app.goo.gl/rxh7QGPPmzcPa1bn7" },
    { title: "Monthly Narayan Seva - 3rd Aug 2024", year: "2024", month: "August", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_3rd_Aug_2024/img4.jpg", link: "https://photos.app.goo.gl/UhSwC58PoSZeStA38" },
    { title: "Guru Pournima Celebrations - 21st July 2024", year: "2024", month: "July", image: "DownloadedPhotos/Guru_Pournima_Celebrations_-_21st_July_2024/img3.jpg", link: "https://photos.app.goo.gl/3KXdU3n8b6qqaa8B7" },
    { title: "Monthly Narayan Seva - 8th June 2024", year: "2024", month: "June", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_8th_June_2024/img5.jpg", link: "https://photos.app.goo.gl/EZQKpCTVjXJwn62s6" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 06th May 2024", year: "2024", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_06th_May_2024/img1.jpg", link: "https://photos.app.goo.gl/sPpL4E2Xrk1iY7yu5" },
    { title: "Eshwaramma Week 2024 - Day 5 - 05th May 2024", year: "2024", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_2024_-_Day_5_-_05th_May_2024/img1.jpg", link: "https://photos.app.goo.gl/8BNZuuoSknVy3nC6A" },
    { title: "Eshwaramma Week 2024 - Day 4 - 04th May 2024", year: "2024", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_2024_-_Day_4_-_04th_May_2024/img3.jpg", link: "https://photos.app.goo.gl/MW5JytfVyAxyufaZ6" },
    { title: "Eshwaramma Week 2024 - Day 3 - 03rd May 2024", year: "2024", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_2024_-_Day_3_-_03rd_May_2024/img5.jpg", link: "https://photos.app.goo.gl/gNi5T8LLMKPBfCU76" },
    { title: "Eshwaramma Week 2024 - Day 2 - 02nd May 2024", year: "2024", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_2024_-_Day_2_-_02nd_May_2024/img4.jpg", link: "https://photos.app.goo.gl/Xq43ioS2xJMwU6PJA" },
    { title: "Eshwaramma Week 2024 - Day 1 - 01st May 2024", year: "2024", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_2024_-_Day_1_-_01st_May_2024/img1.jpg", link: "https://photos.app.goo.gl/4RvkvZgZcGSPGheJ7" },
    { title: "Ladies Day Celebrations - 19th Apr 2024", year: "2024", month: "April", image: "DownloadedPhotos/Ladies_Day_Celebrations_-_19th_Apr_2024/img3.jpg", link: "https://photos.app.goo.gl/bFpK7SyKsJ4LRUtv8" },
    { title: "Last Bhajan at Shri Markandeshwar Mandir - 4th Feb 2024", year: "2024", month: "February", image: "DownloadedPhotos/Last_Bhajan_at_Shri_Markandeshwar_Mandir_-_4th_Feb_2024/img5.jpg", link: "https://photos.app.goo.gl/kjJUPyFpNPq9iMiU9" },
    { title: "Gayatri Havan at Shri Chouke Rajeshwar’s residence - 20th Jan 2024", year: "2024", month: "January", image: "DownloadedPhotos/Gayatri_Havan_at_Shri_Chouke_Rajeshwar’s_residence_-_20th_Jan_2024/img3.jpg", link: "https://photos.app.goo.gl/CUUgqmyuXxtbB7uq8" },
    { title: "Ladies Day Celebrations - 19th Jan 2024", year: "2024", month: "January", image: "DownloadedPhotos/Ladies_Day_Celebrations_-_19th_Jan_2024/img3.jpg", link: "https://photos.app.goo.gl/7cZKWAyxxqvYASZAA" },
    { title: "Gayatri Havan at Shri Chiluka Bhaskar's Residence - 1st Jan 2024", year: "2024", month: "January", image: "DownloadedPhotos/Gayatri_Havan_at_Shri_Chiluka_Bhaskar's_Residence_-_1st_Jan_2024/img1.jpg", link: "https://photos.app.goo.gl/LL7VzkQqbBD1K1cf7" },
    { title: "Monthly Narayan Seva - 31st Dec 2023", year: "2023", month: "December", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_31st_Dec_2023/img5.jpg", link: "https://photos.app.goo.gl/Tmd79ByB5j9XfGiZ8" },
    { title: "98th Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 26th Nov 2023", year: "2023", month: "November", image: "DownloadedPhotos/98th_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_26th_Nov_2023/img1.jpg", link: "https://photos.app.goo.gl/BpgoHZijou7MP7X66" },
    { title: "Maha Narayan Seva - 25th Nov 2023", year: "2023", month: "November", image: "DownloadedPhotos/Maha_Narayan_Seva_-_25th_Nov_2023/img1.jpg", link: "https://photos.app.goo.gl/kvsECEP4fGRM2Yrx9" },
    { title: "Special Nagarsankirtan and Cake Cutting on 98th Birthday of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2023", year: "2023", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_98th_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2023/img2.jpg", link: "https://photos.app.goo.gl/GsgZKbmdi5wbSin49" },
    { title: "Mega Blood Donation Camp - SSSSO MH W1 - Dadar Stn - 18.11.2023", year: "2023", month: "November", image: "DownloadedPhotos/Mega_Blood_Donation_Camp_-_SSSSO_MH_W1_-_Dadar_Stn_-_18.11.2023/img5.jpg", link: "https://photos.app.goo.gl/paiXuCzwNK7cDYyr8" },
    { title: "98 bhajan Pushpanjali - SSSSO MH W1 - District 1 - 4th Nov 2023", year: "2023", month: "November", image: "DownloadedPhotos/98_bhajan_Pushpanjali_-_SSSSO_MH_W1_-_District_1_-_4th_Nov_2023/img1.jpg", link: "https://photos.app.goo.gl/ew4ByuYAuzNXhDRj7" },
    { title: "Dussehra Nagarsankirtan - 24th Oct 2023", year: "2023", month: "October", image: "DownloadedPhotos/Dussehra_Nagarsankirtan_-_24th_Oct_2023/img2.jpg", link: "https://photos.app.goo.gl/KHCPovnvQgZFjwXU8" },
    { title: "Swacchata Se Divyata Tak - MH W1 - 22nd Oct 2023", year: "2023", month: "October", image: "DownloadedPhotos/Swacchata_Se_Divyata_Tak_-_MH_W1_-_22nd_Oct_2023/img3.jpg", link: "https://photos.app.goo.gl/z4eDRRjFGxk5MUWWA" },
    { title: "Monthly Narayan Seva - 21st Oct 2023", year: "2023", month: "October", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_21st_Oct_2023/img5.jpg", link: "https://photos.app.goo.gl/EBegvLaJMb6gZUMLA" },
    { title: "“Prema Tharu” Tree Plantation Drive by Sai Youth of SSSSO MH W1 - 2nd October 2023", year: "2023", month: "October", image: "DownloadedPhotos/“Prema_Tharu”_Tree_Plantation_Drive_by_Sai_Youth_of_SSSSO_MH_W1_-_2nd_October_2023/img1.jpg", link: "https://photos.app.goo.gl/q1ADef8s2XLSqp6j8" },
    { title: "Maha Mrityunjay Dhanvantri Japa Lingabhishekam - Shri Anoop Saxenaji’s Residence - 09th September 2023", year: "2023", month: "September", image: "DownloadedPhotos/Maha_Mrityunjay_Dhanvantri_Japa_Lingabhishekam_-_Shri_Anoop_Saxenaji’s_Residence_-_09th_September_2023/img1.jpg", link: "https://photos.app.goo.gl/C6fBBR3HrkgLCBcBA" },
    { title: "Maha Mrityunjay Dhanvantri Japa Lingabhishekam - Shri Vinod Dasari's Residence - 02nd September 2023", year: "2023", month: "September", image: "DownloadedPhotos/Maha_Mrityunjay_Dhanvantri_Japa_Lingabhishekam_-_Shri_Vinod_Dasari's_Residence_-_02nd_September_2023/img4.jpg", link: "https://photos.app.goo.gl/xpxXYPzNJbBfD1Yn8" },
    { title: "Seva Dal Orientation Program for Prashanti Seva - Worli Samithi - 27th August 2023", year: "2023", month: "August", image: "DownloadedPhotos/Seva_Dal_Orientation_Program_for_Prashanti_Seva_-_Worli_Samithi_-_27th_August_2023/img2.jpg", link: "https://photos.app.goo.gl/oVcwJRtQb4QDdFAn9" },
    { title: "Maha Mrityunjay Dhanvantri Japa Lingabhishekam - Shri Sudarshan Pothu’s Residence - 26th August 2023", year: "2023", month: "August", image: "DownloadedPhotos/Maha_Mrityunjay_Dhanvantri_Japa_Lingabhishekam_-_Shri_Sudarshan_Pothu’s_Residence_-_26th_August_2023/img5.jpg", link: "https://photos.app.goo.gl/xzuoPv844hsamycr7" },
    { title: "Sri Sathya Sai Varalaxmi Vratam - 25th August 2023", year: "2023", month: "August", image: "DownloadedPhotos/Sri_Sathya_Sai_Varalaxmi_Vratam_-_25th_August_2023/img5.jpg", link: "https://photos.app.goo.gl/w2WUx3X9wh3Jzz22A" },
    { title: "Maha Mrityunjay Dhanvantri Japa Lingabhishekam - Shri Gangadhar Gundeti’s Residence - 19th August 2023", year: "2023", month: "August", image: "DownloadedPhotos/Maha_Mrityunjay_Dhanvantri_Japa_Lingabhishekam_-_Shri_Gangadhar_Gundeti’s_Residence_-_19th_August_2023/img4.jpg", link: "https://photos.app.goo.gl/XWqXDvpuv3xYpSdA9" },
    { title: "Maha Mrityunjay Dhanvantri Japa Lingabhishekam - Smt Devakka Vuradi’s Residence - 05th August 2023", year: "2023", month: "August", image: "DownloadedPhotos/Maha_Mrityunjay_Dhanvantri_Japa_Lingabhishekam_-_Smt_Devakka_Vuradi’s_Residence_-_05th_August_2023/img3.jpg", link: "https://photos.app.goo.gl/xL1JiScWLcNMGWAH9" },
    { title: "Maha Mrityunjay Dhanvantri Japa Lingabhishekam - Shri Laxmipathi Kodurupaka’s Residence - 05th August 2023", year: "2023", month: "August", image: "DownloadedPhotos/Maha_Mrityunjay_Dhanvantri_Japa_Lingabhishekam_-_Shri_Laxmipathi_Kodurupaka’s_Residence_-_05th_August_2023/img2.jpg", link: "https://photos.app.goo.gl/Nn7thMv8qb5TBkxW7" },
    { title: "Maha Mrityunjay Dhanvantri Japa Lingabhishekam - Shri Venkatesh Anumandala’s Residence - 29th July 2023", year: "2023", month: "July", image: "DownloadedPhotos/Maha_Mrityunjay_Dhanvantri_Japa_Lingabhishekam_-_Shri_Venkatesh_Anumandala’s_Residence_-_29th_July_2023/img1.jpg", link: "https://photos.app.goo.gl/ez1EMVTF9znXhbUL7" },
    { title: "Monthly Narayan Seva - 29th July 2023", year: "2023", month: "July", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_29th_July_2023/img4.jpg", link: "https://photos.app.goo.gl/F7WociPntbHR8ysb7" },
    { title: "Sri Sathya Sai Prema Tharu Tree Plantation Drive - Maharashtra W1 - 23rd July 2023", year: "2023", month: "July", image: "DownloadedPhotos/Sri_Sathya_Sai_Prema_Tharu_Tree_Plantation_Drive_-_Maharashtra_W1_-_23rd_July_2023/img3.jpg", link: "https://photos.app.goo.gl/3ZkTNeK6qu8XLf8A9" },
    { title: "Maha Mrityunjaya Dhanvantri Japa Lingabhishekam - Shri Markandeshwar Mandir - 22nd July 2023", year: "2023", month: "July", image: "DownloadedPhotos/Maha_Mrityunjaya_Dhanvantri_Japa_Lingabhishekam_-_Shri_Markandeshwar_Mandir_-_22nd_July_2023/img4.jpg", link: "https://photos.app.goo.gl/ZQTqxpZy1zn5Q62o8" },
    { title: "Guru Pournima Celebrations - 2nd July 2023", year: "2023", month: "July", image: "DownloadedPhotos/Guru_Pournima_Celebrations_-_2nd_July_2023/img4.jpg", link: "https://photos.app.goo.gl/4wvexSQGDz6EDMQq8" },
    { title: "Ashadhi Ekadashi Celebrations - 29th June 2023", year: "2023", month: "June", image: "DownloadedPhotos/Ashadhi_Ekadashi_Celebrations_-_29th_June_2023/img3.jpg", link: "https://photos.app.goo.gl/5hziGUuCDKCWfJfMA" },
    { title: "Monthly Narayan Seva - 17th June 2023", year: "2023", month: "June", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_17th_June_2023/img4.jpg", link: "https://photos.app.goo.gl/Uo4wSxbLCiNkdBTR7" },
    { title: "Monthly Narayan Seva - 27th May 2023", year: "2023", month: "May", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_27th_May_2023/img3.jpg", link: "https://photos.app.goo.gl/DLAnMZTaKoBb6bgX6" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 6th May 2023", year: "2023", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_6th_May_2023/img3.jpg", link: "https://photos.app.goo.gl/WErSevhTa1uWYjax6" },
    { title: "Eshwaramma Week - Day5 - 05th May 2023", year: "2023", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day5_-_05th_May_2023/img5.jpg", link: "https://photos.app.goo.gl/e47kPQABHGyRm8Vq7" },
    { title: "Eshwaramma Week - Day4 - 04th May 2023", year: "2023", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day4_-_04th_May_2023/img3.jpg", link: "https://photos.app.goo.gl/RAscsFbSq3Tv9T4CA" },
    { title: "Eshwaramma Week - Day3 - 03rd May 2023", year: "2023", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day3_-_03rd_May_2023/img3.jpg", link: "https://photos.app.goo.gl/VBg371dcfBshVQbp9" },
    { title: "Eshwaramma Week - Day2 - 02nd May 2023", year: "2023", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day2_-_02nd_May_2023/img5.jpg", link: "https://photos.app.goo.gl/9A7ezXgE1kuezQuS6" },
    { title: "Eshwaramma Week - Day1 - 01st May 2023", year: "2023", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day1_-_01st_May_2023/img4.jpg", link: "https://photos.app.goo.gl/zARQivm6X1mexz5y8" },
    { title: "Spiritual Sadhana Camp at Ganegaon, Karjat - 23rd April 2023", year: "2023", month: "April", image: "DownloadedPhotos/Spiritual_Sadhana_Camp_at_Ganegaon,_Karjat_-_23rd_April_2023/img3.jpg", link: "https://photos.app.goo.gl/6nH6ziBQPEBaZMA8A" },
    { title: "Gayatri Havan at Shri Yemula Laxminarayana's Residence - 15th April 2023", year: "2023", month: "April", image: "DownloadedPhotos/Gayatri_Havan_at_Shri_Yemula_Laxminarayana's_Residence_-_15th_April_2023/img3.jpg", link: "https://photos.app.goo.gl/JZQTdBgPxTaCbvP16" },
    { title: "Ugadi Special Nagarsankirtan - 22nd March 2023", year: "2023", month: "March", image: "DownloadedPhotos/Ugadi_Special_Nagarsankirtan_-_22nd_March_2023/img4.jpg", link: "https://photos.app.goo.gl/ykEoZkaUL9e8DRpm9" },
    { title: "Monthly Narayan Seva - 21st Jan 2023", year: "2023", month: "January", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_21st_Jan_2023/img2.jpg", link: "https://photos.app.goo.gl/NThgKYBuYnaAYbNU6" },
    { title: "New Year Special Nagarsankirtan - 01st Jan 2023", year: "2023", month: "January", image: "DownloadedPhotos/New_Year_Special_Nagarsankirtan_-_01st_Jan_2023/img4.jpg", link: "https://photos.app.goo.gl/tA8doBET2rnoWW8p8" },
    { title: "Monthly Narayan Seva - 10th Dec 2022", year: "2022", month: "December", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_10th_Dec_2022/img2.jpg", link: "https://photos.app.goo.gl/nP8kizXSRFv4A4ADA" },
    { title: "97th Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 27th Nov 2022", year: "2022", month: "November", image: "DownloadedPhotos/97th_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_27th_Nov_2022/img5.jpg", link: "https://photos.app.goo.gl/F1bS8DETgSwVWaeB7" },
    { title: "Special Nagarsankirtan and Cake Cutting on 97th Birthday of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2022", year: "2022", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_97th_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2022/img5.jpg", link: "https://photos.app.goo.gl/ePRBaU1abCowYfacA" },
    { title: "Mega Blood Donation Camp - SSSSO MMR - CSMT Stn - 19th Nov 2022", year: "2022", month: "November", image: "DownloadedPhotos/Mega_Blood_Donation_Camp_-_SSSSO_MMR_-_CSMT_Stn_-_19th_Nov_2022/img5.jpg", link: "https://photos.app.goo.gl/DmzY9QPaUbB4NoX68" },
    { title: "Maha Narayan Seva - 13th Nov 2022", year: "2022", month: "November", image: "DownloadedPhotos/Maha_Narayan_Seva_-_13th_Nov_2022/img3.jpg", link: "https://photos.app.goo.gl/ySoppJboWsdgtcZ68" },
    { title: "97 Bhajan Pushpanjali - MMR - Dist 1 - 5th Nov 2022", year: "2022", month: "November", image: "DownloadedPhotos/97_Bhajan_Pushpanjali_-_MMR_-_Dist_1_-_5th_Nov_2022/img5.jpg", link: "https://photos.app.goo.gl/tjiQMd1m6hfbnw7k7" },
    { title: "Gram Seva - Medical Camp at Dharampur village, Dist Palghar - MMR Dist1 - 30th Oct 2022", year: "2022", month: "October", image: "DownloadedPhotos/Gram_Seva_-_Medical_Camp_at_Dharampur_village,_Dist_Palghar_-_MMR_Dist1_-_30th_Oct_2022/img2.jpg", link: "https://photos.app.goo.gl/tHyt98ETrUFSKXs2A" },
    { title: "Diwali Narayan Seva - MMR Dist 1 - 24th Oct 2022", year: "2022", month: "October", image: "DownloadedPhotos/Diwali_Narayan_Seva_-_MMR_Dist_1_-_24th_Oct_2022/img2.jpg", link: "https://photos.app.goo.gl/DXoGvWqhfdJpaGNNA" },
    { title: "Monthly Narayan Seva - 22nd October 2022", year: "2022", month: "October", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_22nd_October_2022/img5.jpg", link: "https://photos.app.goo.gl/chCm8hVundiQdxG48" },
    { title: "Maha Mrityunjay Dhanvantari Japa Lingabhishekam - Shri Rajanna Mittapelli’s Residence - 20th Aug 2022", year: "2022", month: "October", image: "DownloadedPhotos/Maha_Mrityunjay_Dhanvantari_Japa_Lingabhishekam_-_Shri_Rajanna_Mittapelli’s_Residence_-_20th_Aug_2022/img2.jpg", link: "https://photos.app.goo.gl/TdqcKHH4AmVbM57V9" },
    { title: "Maha Narayan Seva - 13th Nov 2022", year: "2022", month: "October", image: "DownloadedPhotos/Maha_Narayan_Seva_-_13th_Nov_2022/img5.jpg", link: "https://photos.app.goo.gl/ySoppJboWsdgtcZ68" },
    { title: "Monthly Narayan Seva - 09th October 2022", year: "2022", month: "October", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_09th_October_2022/img2.jpg", link: "https://photos.app.goo.gl/jHd1jfuHaTLFWbAX6" },
    { title: "Dussehra Nagarsankirtan - MMR - Dist 1 - 5th Oct 2022", year: "2022", month: "October", image: "DownloadedPhotos/Dussehra_Nagarsankirtan_-_MMR_-_Dist_1_-_5th_Oct_2022/img1.jpg", link: "https://photos.app.goo.gl/ZDwffdGd1n2c6d2U8" },
    { title: "Beach Cleaning - Swacchata Se Divyata Tak - MMR Dist 1 - 2nd Oct 2022", year: "2022", month: "October", image: "DownloadedPhotos/Beach_Cleaning_-_Swacchata_Se_Divyata_Tak_-_MMR_Dist_1_-_2nd_Oct_2022/img1.jpg", link: "https://photos.app.goo.gl/TdQjqckw3BoFZ23a8" },
    { title: "Tree Plantation at Sri Sathya Sai Institute of Agriculture and Biotechnology - 28th August 2022", year: "2022", month: "August", image: "DownloadedPhotos/Tree_Plantation_at_Sri_Sathya_Sai_Institute_of_Agriculture_and_Biotechnology_-_28th_August_2022/img2.jpg", link: "https://photos.app.goo.gl/XJV2Eve8M1u5Prvx6" },
    { title: "Maha Mrityunjay Dhanvantari Japa Lingabhishekam - Shri Anoop Saxena’s Residence - 27th Aug 2022", year: "2022", month: "August", image: "DownloadedPhotos/Maha_Mrityunjay_Dhanvantari_Japa_Lingabhishekam_-_Shri_Anoop_Saxena’s_Residence_-_27th_Aug_2022/img5.jpg", link: "https://photos.app.goo.gl/D7SAC37LVWqooLwY6" },
    { title: "Gayatri Havan at Smt Katkam Sujata’s residence - 15th August 2022", year: "2022", month: "August", image: "DownloadedPhotos/Gayatri_Havan_at_Smt_Katkam_Sujata’s_residence_-_15th_August_2022/img2.jpg", link: "https://photos.app.goo.gl/iQSw6sGazTT4EDWu9" },
    { title: "Raksha Bandhan And 75th Independence Day Celebrations - 14th August 2022", year: "2022", month: "August", image: "DownloadedPhotos/Raksha_Bandhan_And_75th_Independence_Day_Celebrations_-_14th_August_2022/img2.jpg", link: "https://photos.app.goo.gl/hDzbevHk5h75KqQVA" },
    { title: "Maha Mrityunjay Dhanvantari Japa Lingabhishekam - Shri Venkatesh Anumandala’s Residence - 13th Aug 2022", year: "2022", month: "August", image: "DownloadedPhotos/Maha_Mrityunjay_Dhanvantari_Japa_Lingabhishekam_-_Shri_Venkatesh_Anumandala’s_Residence_-_13th_Aug_2022/img3.jpg", link: "https://photos.app.goo.gl/FBnif135DPwoMKPV6" },
    { title: "Tree Plantation Drive by MMR Dist 1 - Chirma Devi, Anand Nagar, Thane - 13th August 2022", year: "2022", month: "August", image: "DownloadedPhotos/Tree_Plantation_Drive_by_MMR_Dist_1_-_Chirma_Devi,_Anand_Nagar,_Thane_-_13th_August_2022/img2.jpg", link: "https://photos.app.goo.gl/GNxUGMAsXdUfRAiK8" },
    { title: "Maha Mrityunjay Dhanvantari Japa Lingabhishekam - Shri Laxminarayana Yemula’s Residence - 6th Aug 2022", year: "2022", month: "August", image: "DownloadedPhotos/Maha_Mrityunjay_Dhanvantari_Japa_Lingabhishekam_-_Shri_Laxminarayana_Yemula’s_Residence_-_6th_Aug_2022/img1.jpg", link: "https://photos.app.goo.gl/6aPdMk3vp5wry1JM7" },
    { title: "Sri Sathya Sai Varalaxmi Vratam - 5th August 2022", year: "2022", month: "August", image: "DownloadedPhotos/Sri_Sathya_Sai_Varalaxmi_Vratam_-_5th_August_2022/img3.jpg", link: "https://photos.app.goo.gl/z9pMbeTmaxJuyKdk8" },
    { title: "Maha Mrityunjaya Dhanvantari Japa Lingabhishekam - Shri Markandeshwar Mandir - 30th July 2022", year: "2022", month: "July", image: "DownloadedPhotos/Maha_Mrityunjaya_Dhanvantari_Japa_Lingabhishekam_-_Shri_Markandeshwar_Mandir_-_30th_July_2022/img2.jpg", link: "https://photos.app.goo.gl/tLobVfThaAAQ325t6" },
    { title: "Umbrella Distribution - 26th June 2022", year: "2022", month: "July", image: "DownloadedPhotos/Umbrella_Distribution_-_26th_June_2022/img3.jpg", link: "https://photos.app.goo.gl/ZbuQUVFWhsVU6MY49" },
    { title: "Guru Pournima Celebrations - 13th July 2022", year: "2022", month: "July", image: "DownloadedPhotos/Guru_Pournima_Celebrations_-_13th_July_2022/img4.jpg", link: "https://photos.app.goo.gl/zwYh1AzAQFQ7CazJ6" },
    { title: "Ashadhi Ekadashi Celebrations - 10th July 2022", year: "2022", month: "July", image: "DownloadedPhotos/Ashadhi_Ekadashi_Celebrations_-_10th_July_2022/img4.jpg", link: "https://photos.app.goo.gl/NAYYx5su2irhvMr4A" },
    { title: "Tree Plantation Preparation - Sri Sathya Sai Institute of Agriculture and Biotechnology - Aksa - 03rd July 2022", year: "2022", month: "July", image: "DownloadedPhotos/Tree_Plantation_Preparation_-_Sri_Sathya_Sai_Institute_of_Agriculture_and_Biotechnology_-_Aksa_-_03rd_July_2022/img1.jpg", link: "https://photos.app.goo.gl/FMuAHmjW4TPgVYt59" },
    { title: "Monthly Narayan Seva - 25th June 2022", year: "2022", month: "June", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_25th_June_2022/img5.jpg", link: "https://photos.app.goo.gl/CxLVFwn5FEqoUX3XA" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 6th May 2022", year: "2022", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_6th_May_2022/img4.jpg", link: "https://photos.app.goo.gl/vsnaU8D4ssnwdEwYA" },
    { title: "Eshwaramma Week - Day 5 - 05th May 2022", year: "2022", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_5_-_05th_May_2022/img1.jpg", link: "https://photos.app.goo.gl/vmgZKZKM3ZVwu4so9" },
    { title: "Eshwaramma Week - Day 4 - 4th May 2022", year: "2022", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_4_-_4th_May_2022/img1.jpg", link: "https://photos.app.goo.gl/ppYQ8FkNTr7F3LAi8" },
    { title: "Eshwaramma Week - Day 3 - 3rd May 2022", year: "2022", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_3_-_3rd_May_2022/img1.jpg", link: "https://photos.app.goo.gl/CUhmoJrxrpJYP7aQ7" },
    { title: "Eshwaramma Week - Day 2 - 2nd May 2022", year: "2022", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_2_-_2nd_May_2022/img4.jpg", link: "https://photos.app.goo.gl/65WAFFcMvFEiiRAj8" },
    { title: "Eshwaramma Week - Day 1 - 1st May 2022", year: "2022", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_1_-_1st_May_2022/img4.jpg", link: "https://photos.app.goo.gl/rzULBCw1nndnEwaH6" },
    { title: "Aradhana Day Special Nagarsankirtan - 24th April 2022", year: "2022", month: "April", image: "DownloadedPhotos/Aradhana_Day_Special_Nagarsankirtan_-_24th_April_2022/img2.jpg", link: "https://photos.app.goo.gl/e2FrxDL7WKcT32Gj8" },
    { title: "Aradhana Day Special Bhajan - 24th April 2022", year: "2022", month: "April", image: "DownloadedPhotos/Aradhana_Day_Special_Bhajan_-_24th_April_2022/img2.jpg", link: "https://photos.app.goo.gl/6v6egg3STuYfWrSS7" },
    { title: "Aradhana Day Amrut Kalash Distribution - 24th April 2022", year: "2022", month: "April", image: "DownloadedPhotos/Aradhana_Day_Amrut_Kalash_Distribution_-_24th_April_2022/img2.jpg", link: "https://photos.app.goo.gl/6fYJB2qFFyqu8K3D7" },
    { title: "Aradhana Day Narayan Seva - 24th April 2022", year: "2022", month: "April", image: "DownloadedPhotos/Aradhana_Day_Narayan_Seva_-_24th_April_2022/img3.jpg", link: "https://photos.app.goo.gl/S4bXKuGHy33TFN319" },
    { title: "Spiritual Sadhana Camp - Sri Rama Navami Celebrations at Gajelli Farm, Karjat - 10th Apr 2022", year: "2022", month: "April", image: "DownloadedPhotos/Spiritual_Sadhana_Camp_-_Sri_Rama_Navami_Celebrations_at_Gajelli_Farm,_Karjat_-_10th_Apr_2022/img2.jpg", link: "https://photos.app.goo.gl/4HsHvvrmdfTSMx1x6" },
    { title: "Gayatri Havan at Shri Yemula Laxminarayana’s Residence - 02nd April 2022", year: "2022", month: "April", image: "DownloadedPhotos/Gayatri_Havan_at_Shri_Yemula_Laxminarayana’s_Residence_-_02nd_April_2022/img5.jpg", link: "https://photos.app.goo.gl/MHdHwrSWs1i1PmEZ9" },
    { title: "Ugadi Special Nagarsankirtan- 02nd April 2022", year: "2022", month: "April", image: "DownloadedPhotos/Ugadi_Special_Nagarsankirtan-_02nd_April_2022/img3.jpg", link: "https://photos.app.goo.gl/LNwcf5DoF7XqHmxY8" },
    { title: "Monthly Narayan Seva - 26th Feb 2022", year: "2022", month: "February", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_26th_Feb_2022/img3.jpg", link: "https://photos.app.goo.gl/Z3LrkjAA32Yj4m1v6" },
    { title: "Blankets Distribution - 02nd Jan 2022", year: "2022", month: "January", image: "DownloadedPhotos/Blankets_Distribution_-_02nd_Jan_2022/img4.jpg", link: "https://photos.app.goo.gl/QLTDxVLNnhDmgLgp7" },
    { title: "Gayatri Havan at Shri Pothu Sudarshan’s Residence - 01st Jan 2022", year: "2022", month: "January", image: "DownloadedPhotos/Gayatri_Havan_at_Shri_Pothu_Sudarshan’s_Residence_-_01st_Jan_2022/img5.jpg", link: "https://photos.app.goo.gl/9zP4zC5traL1TW3G6" },
    { title: "96th Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2021", year: "2021", month: "November", image: "DownloadedPhotos/96th_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2021/img2.jpg", link: "https://photos.app.goo.gl/WaTmRr3XD8Vvf2Ef8" },
    { title: "Mega Blood Donation Camp - SSSSO MMR - CSMT Stn - 21st Nov 2021", year: "2021", month: "November", image: "DownloadedPhotos/Mega_Blood_Donation_Camp_-_SSSSO_MMR_-_CSMT_Stn_-_21st_Nov_2021/img5.jpg", link: "https://photos.app.goo.gl/p3c4n9D6SXWdSiGr6" },
    { title: "Amrut Kalash Distribution - 20th Nov 2021", year: "2021", month: "November", image: "DownloadedPhotos/Amrut_Kalash_Distribution_-_20th_Nov_2021/img1.jpg", link: "https://photos.app.goo.gl/2oZ9NgdjzpAmUTha9" },
    { title: "Prashanti Seva - 25th to 31st Oct 2021", year: "2021", month: "October", image: "DownloadedPhotos/Prashanti_Seva_-_25th_to_31st_Oct_2021/img5.jpg", link: "https://photos.app.goo.gl/JK7aukaLTPZHxA1N7" },
    { title: "Swacchata Se Divyata Tak - 17th Oct 2021", year: "2021", month: "October", image: "DownloadedPhotos/Swacchata_Se_Divyata_Tak_-_17th_Oct_2021/img3.jpg", link: "https://photos.app.goo.gl/TKCMxyeod4cgCdRK6" },
    { title: "Monthly Narayan Seva - 29th Aug 2021", year: "2021", month: "August", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_29th_Aug_2021/img3.jpg", link: "https://photos.app.goo.gl/fD7GtawkMiryZsm9A" },
    { title: "Lingabhishekam 2021", year: "2021", month: "August", image: "DownloadedPhotos/Lingabhishekam_2021/img4.jpg", link: "https://photos.app.goo.gl/Y762N9pp33snvJC58" },
    { title: "Sri Sathya Sai Varalaxmi Vratam - 20th August 2021", year: "2021", month: "August", image: "DownloadedPhotos/Sri_Sathya_Sai_Varalaxmi_Vratam_-_20th_August_2021/img4.jpg", link: "https://photos.app.goo.gl/uBMZHadBqq9nqE6R7" },
    { title: "Guru Pournima Celebrations - 24th July 2021", year: "2021", month: "July", image: "DownloadedPhotos/Guru_Pournima_Celebrations_-_24th_July_2021/img1.jpg", link: "https://photos.app.goo.gl/d4BvNqopx9LnsCJC7" },
    { title: "Ashadhi Ekadashi Celebrations - 18th July 2021", year: "2021", month: "July", image: "DownloadedPhotos/Ashadhi_Ekadashi_Celebrations_-_18th_July_2021/img5.jpg", link: "https://photos.app.goo.gl/e6q8NSs3x4xpJ2547" },
    { title: "Monthly Narayan Seva - 19th June 2021", year: "2021", month: "June", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_19th_June_2021/img2.jpg", link: "https://photos.app.goo.gl/4VJ3w7ZUEXK4sNFg7" },
    { title: "Sri Sathya Sai Balvikas Alumni Meet - 06th June 2021", year: "2021", month: "June", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Alumni_Meet_-_06th_June_2021/img1.jpg", link: "https://photos.app.goo.gl/WEsCrSa9aHPWWjwE7" },
    { title: "Amrut Kalash Distribution - 16th May 2021", year: "2021", month: "May", image: "DownloadedPhotos/Amrut_Kalash_Distribution_-_16th_May_2021/img4.jpg", link: "https://photos.app.goo.gl/xXCCyDFwqtvYv3mRA" },
    { title: "Mother's Day Celebrations - 09th May 2021", year: "2021", month: "May", image: "DownloadedPhotos/Mother's_Day_Celebrations_-_09th_May_2021/img5.jpg", link: "https://photos.app.goo.gl/M1mvcahbpNfL4qb79" },
    { title: "Eshwaramma Week - Day 6 - 06th May 2021", year: "2021", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_6_-_06th_May_2021/img5.jpg", link: "https://photos.app.goo.gl/WtoBquvwFCBVhmba8" },
    { title: "Eshwaramma Week - Day 5 - 05th May 2021", year: "2021", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_5_-_05th_May_2021/img3.jpg", link: "https://photos.app.goo.gl/YhpLJP97qTxCAEVE7" },
    { title: "Eshwaramma Week - Day 4 - 04th May 2021", year: "2021", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_4_-_04th_May_2021/img3.jpg", link: "https://photos.app.goo.gl/z63e4Rz3qW9NRxTs9" },
    { title: "Eshwaramma Week - Day 3 - 03rd May 2021", year: "2021", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_3_-_03rd_May_2021/img5.jpg", link: "https://photos.app.goo.gl/SJJTerGhUBaXDHrE8" },
    { title: "Eshwaramma Week - Day 2 - 02nd May 2021", year: "2021", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_2_-_02nd_May_2021/img4.jpg", link: "https://photos.app.goo.gl/A1dwunNLKNZJVA3a8" },
    { title: "Eshwaramma Week - Day 1 - 01st May 2021", year: "2021", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_1_-_01st_May_2021/img2.jpg", link: "https://photos.app.goo.gl/zj5y2miLSxHLh4Ju5" },
    { title: "Monthly Narayan Seva - 20th March 2021", year: "2021", month: "March", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_20th_March_2021/img2.jpg", link: "https://photos.app.goo.gl/bgwZZzWmgsUFH1Gs6" },
    { title: "Monthly Narayan Seva - 27th Feb 2021", year: "2021", month: "February", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_27th_Feb_2021/img5.jpg", link: "https://photos.app.goo.gl/NGmB289W1iSrzM4G7" },
    { title: "Monthly Narayan Seva - 30th Jan 2021", year: "2021", month: "January", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_30th_Jan_2021/img4.jpg", link: "https://photos.app.goo.gl/8jpdh21JMRwDnuqK7" },
    { title: "Blanket Distribution Seva - 19th Dec 2020", year: "2020", month: "December", image: "DownloadedPhotos/Blanket_Distribution_Seva_-_19th_Dec_2020/img3.jpg", link: "https://photos.app.goo.gl/ruKGexHc3eaKBCit6" },
    { title: "95th Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2020", year: "2020", month: "November", image: "DownloadedPhotos/95th_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2020/img2.jpg", link: "https://photos.app.goo.gl/vqed8U4Y6gTbxafq7" },
    { title: "Monthly Narayan Seva - 15th Nov 2020", year: "2020", month: "November", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_15th_Nov_2020/img3.jpg", link: "https://photos.app.goo.gl/qUDh1YPX51D34NiL8" },
    { title: "Sri Sathya Sai Varalaxmi Vratam - 31st July 2020", year: "2020", month: "July", image: "DownloadedPhotos/Sri_Sathya_Sai_Varalaxmi_Vratam_-_31st_July_2020/img5.jpg", link: "https://photos.app.goo.gl/w8Z7K9mRqabJ5bKn8" },
    { title: "Guru Pournima Celebrations - 5th July 2020", year: "2020", month: "July", image: "DownloadedPhotos/Guru_Pournima_Celebrations_-_5th_July_2020/img1.jpg", link: "https://photos.app.goo.gl/H15RoeUokAi8N9YVA" },
    { title: "Face Shield Distribution - 26th June 2020", year: "2020", month: "June", image: "DownloadedPhotos/Face_Shield_Distribution_-_26th_June_2020/img1.jpg", link: "https://photos.app.goo.gl/DvZbfFjTX3J3rWJk8" },
    { title: "Online Bhajan Session - 31st May 2020", year: "2020", month: "May", image: "DownloadedPhotos/Online_Bhajan_Session_-_31st_May_2020/img2.jpg", link: "https://photos.app.goo.gl/imUVutMMxSvSSrc18" },
    { title: "Amruth Kalash Distribution - 31st May 2020", year: "2020", month: "May", image: "DownloadedPhotos/Amruth_Kalash_Distribution_-_31st_May_2020/img5.jpg", link: "https://photos.app.goo.gl/5xdcAmYriLCz6TQE7" },
    { title: "Online Bhajan Session - 24th May 2020", year: "2020", month: "May", image: "DownloadedPhotos/Online_Bhajan_Session_-_24th_May_2020/img3.jpg", link: "https://photos.app.goo.gl/UZCcMoDBrdHpgy5d9" },
    { title: "Online Bhajan Session - 17th May 2020", year: "2020", month: "May", image: "DownloadedPhotos/Online_Bhajan_Session_-_17th_May_2020/img5.jpg", link: "https://photos.app.goo.gl/p9Hgwbjx5yfYJjAY8" },
    { title: "Online Bhajan Session - 10th May 2020", year: "2020", month: "May", image: "DownloadedPhotos/Online_Bhajan_Session_-_10th_May_2020/img5.jpg", link: "https://photos.app.goo.gl/cDkPAhCtxPZBpxyp8" },
    { title: "Monthly Narayan Seva - 8th May 2020", year: "2020", month: "May", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_8th_May_2020/img5.jpg", link: "https://photos.app.goo.gl/1T2ATuHUHiDCpoRL7" },
    { title: "Eshwaramma Week - Day6 - 06th May 2020", year: "2020", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day6_-_06th_May_2020/img4.jpg", link: "https://photos.app.goo.gl/56eMH1U2GDtD8DP29" },
    { title: "Eshwaramma Week - Day5 - 05th May 2020", year: "2020", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day5_-_05th_May_2020/img2.jpg", link: "https://photos.app.goo.gl/EJY6MfNvq3XG7Wb98" },
    { title: "Eshwaramma Week - Day4 - 04th May 2020", year: "2020", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day4_-_04th_May_2020/img3.jpg", link: "https://photos.app.goo.gl/RXuhXZEm41rGvQCy7" },
    { title: "Eshwaramma Week - Day3 - 03rd May 2020", year: "2020", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day3_-_03rd_May_2020/img1.jpg", link: "https://photos.app.goo.gl/pWK8X4p4KtmHaGSF6" },
    { title: "Eshwaramma Week - Day2 - 02nd May 2020", year: "2020", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day2_-_02nd_May_2020/img2.jpg", link: "https://photos.app.goo.gl/8gfHnuEk5zoqasUu7" },
    { title: "Eshwaramma Week - Day1 - 01st May 2020", year: "2020", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day1_-_01st_May_2020/img1.jpg", link: "https://photos.app.goo.gl/oWagLWoGKFbdfghy9" },
    { title: "Online Bhajan Session - 26th April 2020", year: "2020", month: "April", image: "DownloadedPhotos/Online_Bhajan_Session_-_26th_April_2020/img5.jpg", link: "https://photos.app.goo.gl/kEwpmnffVcz9BGjB9" },
    { title: "Aradhana Day Narayan Seva - 24th April 2020", year: "2020", month: "April", image: "DownloadedPhotos/Aradhana_Day_Narayan_Seva_-_24th_April_2020/img5.jpg", link: "https://photos.app.goo.gl/rXTCY3DzqLJduwzC6" },
    { title: "Monthly Narayan Seva - 29th Feb 2020", year: "2020", month: "February", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_29th_Feb_2020/img1.jpg", link: "https://photos.app.goo.gl/WYAXNfzYizUYvuhN8" },
    { title: "Gayatri Havan at Shri Gudla Limbadri’s Residence - 29th Feb 2020", year: "2020", month: "February", image: "DownloadedPhotos/Gayatri_Havan_at_Shri_Gudla_Limbadri’s_Residence_-_29th_Feb_2020/img4.jpg", link: "https://photos.app.goo.gl/eT8r4drAy2Q1szLu7" },
    { title: "Spiritual Sadhana Camp at Khardi, Virar - 16th Feb 2020", year: "2020", month: "February", image: "DownloadedPhotos/Spiritual_Sadhana_Camp_at_Khardi,_Virar_-_16th_Feb_2020/img5.jpg", link: "https://photos.app.goo.gl/5Z43S5TdXU8iMgsf7" },
    { title: "Sri Sathya Sai Balvikas at Prabhadevi - 02nd Feb 2020", year: "2020", month: "February", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_at_Prabhadevi_-_02nd_Feb_2020/img1.jpg", link: "https://photos.app.goo.gl/Z2jNvobTC33ZzMcJ9" },
    { title: "New Sri Sathya Sai Balvikas at Prabhadevi - 26th Jan 2020", year: "2020", month: "January", image: "DownloadedPhotos/New_Sri_Sathya_Sai_Balvikas_at_Prabhadevi_-_26th_Jan_2020/img1.jpg", link: "https://photos.app.goo.gl/7BpZEZSQPLeceZTu7" },
    { title: "Monthly Narayan Seva - 25th Jan 2020", year: "2020", month: "January", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_25th_Jan_2020/img3.jpg", link: "https://photos.app.goo.gl/Vm6Cje8fp3k3k66XA" },
    { title: "Sri Sathya Sai Balvikas Sports Meet - 19th Jan 2020", year: "2020", month: "January", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Sports_Meet_-_19th_Jan_2020/img2.jpg", link: "https://photos.app.goo.gl/4pgQZSsef3zEA6fL6" },
    { title: "New Year Special Nagarsankirtan - 01st Jan 2020", year: "2020", month: "January", image: "DownloadedPhotos/New_Year_Special_Nagarsankirtan_-_01st_Jan_2020/img2.jpg", link: "https://photos.app.goo.gl/pkquZqDYciEeTpPk6" },
    { title: "Monthly Narayan Seva - 28th Dec 2019", year: "2019", month: "December", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_28th_Dec_2019/img1.jpg", link: "https://photos.app.goo.gl/whdfSU64KjGum9488" },
    { title: "Guru Vandana - A Tribute to 50 years of Selfless Service by Balvikas Gurus and Bal Vikas Alumni Meet Programme - Dharmakshetra, 22nd December 2019", year: "2019", month: "December", image: "DownloadedPhotos/Guru_Vandana_-_A_Tribute_to_50_years_of_Selfless_Service_by_Balvikas_Gurus_and_Bal_Vikas_Alumni_Meet_Programme_-_Dharmakshetra,_22nd_December_2019/img1.jpg", link: "https://photos.app.goo.gl/Pqj8S89t4kSKKXys6" },
    { title: "Guru Vandana - Balvikas Alumni Meet at Dharmakshetra - 22nd Dec 2019", year: "2019", month: "December", image: "DownloadedPhotos/Guru_Vandana_-_Balvikas_Alumni_Meet_at_Dharmakshetra_-_22nd_Dec_2019/img2.jpg", link: "https://photos.app.goo.gl/DTT5TGkUvhhCwdjh8" },
    { title: "Christmas Nagarsankirtan by ‘District Mumbai 1’ on Saturday, 21st December, 2019", year: "2019", month: "December", image: "DownloadedPhotos/Christmas_Nagarsankirtan_by_‘District_Mumbai_1’_on_Saturday,_21st_December,_2019/img3.jpg", link: "https://photos.app.goo.gl/iCdoXRx6yBPPB8xPA" },
    { title: "Maha Narayan Seva - 24th Nov 2019", year: "2019", month: "November", image: "DownloadedPhotos/Maha_Narayan_Seva_-_24th_Nov_2019/img2.jpg", link: "https://photos.app.goo.gl/qQ5Um8tSwfp9fTZs9" },
    { title: "Monthly Narayan Seva - 23rd Nov 2019", year: "2019", month: "November", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_23rd_Nov_2019/img2.jpg", link: "https://photos.app.goo.gl/jQvLoLiUo722vvMp6" },
    { title: "Special Nagarsankirtan and Cake Cutting on 94th Birthday of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2019", year: "2019", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_94th_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2019/img5.jpg", link: "https://photos.app.goo.gl/vYdFXzqXg4gsk6p59" },
    { title: "94th Birthday Celebrations by Sri Sathya Sai Balvikas Children - Prabhadevi - 23rd Nov 2019", year: "2019", month: "November", image: "DownloadedPhotos/94th_Birthday_Celebrations_by_Sri_Sathya_Sai_Balvikas_Children_-_Prabhadevi_-_23rd_Nov_2019/img2.jpg", link: "https://photos.app.goo.gl/De1SCjTygFPw16Xp7" },
    { title: "94th Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 17th Nov 2019", year: "2019", month: "November", image: "DownloadedPhotos/94th_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_17th_Nov_2019/img5.jpg", link: "https://photos.app.goo.gl/jdJ41YYM4KU622L27" },
    { title: "94 Bhajan Pushpanjali - 02nd Nov 2019", year: "2019", month: "November", image: "DownloadedPhotos/94_Bhajan_Pushpanjali_-_02nd_Nov_2019/img3.jpg", link: "https://photos.app.goo.gl/BUdAUt4cwJEJmktn8" },
    { title: "Diwali Celebrations by Sri Sathya Sai Balvikas - 27th Oct 2019", year: "2019", month: "October", image: "DownloadedPhotos/Diwali_Celebrations_by_Sri_Sathya_Sai_Balvikas_-_27th_Oct_2019/img3.jpg", link: "https://photos.app.goo.gl/tHj2hPHfe9aWGbum6" },
    { title: "Monthly Narayan Seva - 20th Oct 2019", year: "2019", month: "October", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_20th_Oct_2019/img4.jpg", link: "https://photos.app.goo.gl/VrjUu4ijyN9Hr9id9" },
    { title: "Dussehra Nagarsankirtan - 08th Oct 2019", year: "2019", month: "October", image: "DownloadedPhotos/Dussehra_Nagarsankirtan_-_08th_Oct_2019/img3.jpg", link: "https://photos.app.goo.gl/eWaZ7eyLTabpDP7aA" },
    { title: "Monthly Narayan Seva - 21st Sept 2019", year: "2019", month: "September", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_21st_Sept_2019/img4.jpg", link: "https://photos.app.goo.gl/iqjpuevFPRB52wh58" },
    { title: "Sri Sathya Sai Balvikas Elocution Competition - 15th Sept 2019", year: "2019", month: "September", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Elocution_Competition_-_15th_Sept_2019/img3.jpg", link: "https://photos.app.goo.gl/vdyv9qVea4ffHkgA9" },
    { title: "Medical Seva Meet - 1st Sept 2019", year: "2019", month: "September", image: "DownloadedPhotos/Medical_Seva_Meet_-_1st_Sept_2019/img1.jpg", link: "https://photos.app.goo.gl/3zzeLTSTuWK1DD8T7" },
    { title: "Ganesh Festival Celebrations - 1st Sept 2019", year: "2019", month: "September", image: "DownloadedPhotos/Ganesh_Festival_Celebrations_-_1st_Sept_2019/img2.jpg", link: "https://photos.app.goo.gl/8VVvbouTq4Yp5s4K7" },
    { title: "Maha Mrityunjay Dhanvantari Japa Lingabhishekam - Shri Anoop Saxenaji’s Residence - 30th Aug 2019", year: "2019", month: "August", image: "DownloadedPhotos/Maha_Mrityunjay_Dhanvantari_Japa_Lingabhishekam_-_Shri_Anoop_Saxenaji’s_Residence_-_30th_Aug_2019/img4.jpg", link: "https://photos.app.goo.gl/xvbxqddGxNA55vAbA" },
    { title: "Janmashtami Celebrations by Sri Sathya Sai Balvikas Children", year: "2019", month: "August", image: "DownloadedPhotos/Janmashtami_Celebrations_by_Sri_Sathya_Sai_Balvikas_Children/img4.jpg", link: "https://photos.app.goo.gl/RgsMVX9AVEk1FvRq9" },
    { title: "Maha Mrityunjay Dhanvantari Japa Lingabhishekam - Smt Devakka Vuradi’s Residence - 24th August 2019", year: "2019", month: "August", image: "DownloadedPhotos/Maha_Mrityunjay_Dhanvantari_Japa_Lingabhishekam_-_Smt_Devakka_Vuradi’s_Residence_-_24th_August_2019/img3.jpg", link: "https://photos.app.goo.gl/q2ZTguQUZtYQ2m7r5" },
    { title: "Maha Mrityunjaya Dhanvantari Japa Lingabhishekam - Shri Venkatesh Anumandala’s Residence - 17th August 2019", year: "2019", month: "August", image: "DownloadedPhotos/Maha_Mrityunjaya_Dhanvantari_Japa_Lingabhishekam_-_Shri_Venkatesh_Anumandala’s_Residence_-_17th_August_2019/img3.jpg", link: "https://photos.app.goo.gl/ZspSEPcVkqNRcud16" },
    { title: "Raksha Bandhan Celebrations - 15th Aug 2019", year: "2019", month: "August", image: "DownloadedPhotos/Raksha_Bandhan_Celebrations_-_15th_Aug_2019/img2.jpg", link: "https://photos.app.goo.gl/D8RrzChZE5dxYS2y7" },
    { title: "Maha Mrityunjaya Dhanwantri Japa Lingabhishekam - Shri Sudarshan Pothu’s Residence - 10th August 2019", year: "2019", month: "August", image: "DownloadedPhotos/Maha_Mrityunjaya_Dhanwantri_Japa_Lingabhishekam_-_Shri_Sudarshan_Pothu’s_Residence_-_10th_August_2019/img5.jpg", link: "https://photos.app.goo.gl/uNA8scXStvSgkJcH6" },
    { title: "Sri Sathya Sai Varalaxmi Vratam - 9th August 2019", year: "2019", month: "August", image: "DownloadedPhotos/Sri_Sathya_Sai_Varalaxmi_Vratam_-_9th_August_2019/img5.jpg", link: "https://photos.app.goo.gl/hwdZFkxK6ubf2iKL8" },
    { title: "Maha Mrityunjaya Dhanvantri Japa Lingabhishekam - Shri Markandeshwar Mandir - 3rd Aug 2019", year: "2019", month: "August", image: "DownloadedPhotos/Maha_Mrityunjaya_Dhanvantri_Japa_Lingabhishekam_-_Shri_Markandeshwar_Mandir_-_3rd_Aug_2019/img1.jpg", link: "https://photos.app.goo.gl/dCahtAn95BHfCv5D8" },
    { title: "94 Bhajan Pushpanjali - 27th July 2019", year: "2019", month: "July", image: "DownloadedPhotos/94_Bhajan_Pushpanjali_-_27th_July_2019/img2.jpg", link: "https://photos.app.goo.gl/wrF2MuNdFE1FU8rt6" },
    { title: "Monthly Narayan Seva - 20th July 2019", year: "2019", month: "July", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_20th_July_2019/img3.jpg", link: "https://photos.app.goo.gl/cJ9vCcwhVtfFaAPa8" },
    { title: "Guru Poornima Celebrations - 16th July 2019", year: "2019", month: "July", image: "DownloadedPhotos/Guru_Poornima_Celebrations_-_16th_July_2019/img2.jpg", link: "https://photos.app.goo.gl/zo4E4JnhuGt41tYJ7" },
    { title: "Ashadhi Ekadashi Celebrations - 12th July 2019", year: "2019", month: "July", image: "DownloadedPhotos/Ashadhi_Ekadashi_Celebrations_-_12th_July_2019/img2.jpg", link: "https://photos.app.goo.gl/e84SAeZJkdd8QNCE9" },
    { title: "Shramdaan - Tree Plantation Drive - 7th July 2019", year: "2019", month: "July", image: "DownloadedPhotos/Shramdaan_-_Tree_Plantation_Drive_-_7th_July_2019/img2.jpg", link: "https://photos.app.goo.gl/LXcidtTgCGVjUrdr5" },
    { title: "Monthly Narayan Seva - 29th June 2019", year: "2019", month: "June", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_29th_June_2019/img1.jpg", link: "https://photos.app.goo.gl/9tKek6qsHF7ewdUD9" },
    { title: "Mega Blood Donation Camp, Dadar - 01st June 2019", year: "2019", month: "June", image: "DownloadedPhotos/Mega_Blood_Donation_Camp,_Dadar_-_01st_June_2019/img1.jpg", link: "https://photos.app.goo.gl/aMByK6Mo1YAFBBX9A" },
    { title: "Sri Sathya Sai Balvikas Summer Camp - Day 7 - 26th May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Summer_Camp_-_Day_7_-_26th_May_2019/img4.jpg", link: "https://photos.app.goo.gl/xfahuUJA4QSiCFLs9" },
    { title: "Amruth Kalash Distribution - 25th May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Amruth_Kalash_Distribution_-_25th_May_2019/img4.jpg", link: "https://photos.app.goo.gl/8zbrQMPonPidmBza6" },
    { title: "Monthly Narayan Seva - 25th May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_25th_May_2019/img5.jpg", link: "https://photos.app.goo.gl/JWCejrnH3874mPvQ7" },
    { title: "Sri Sathya Sai Balvikas Summer Camp - Day 5 - 24th May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Summer_Camp_-_Day_5_-_24th_May_2019/img1.jpg", link: "https://photos.app.goo.gl/9XExKqvonThcBiMW8" },
    { title: "Sri Sathya Sai Balvikas Summer Camp - Day 4 - 23rd May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Summer_Camp_-_Day_4_-_23rd_May_2019/img3.jpg", link: "https://photos.app.goo.gl/8tdqUh7qb8rxDht89" },
    { title: "Sri Sathya Sai Balvikas Summer Camp - Day 3 - 22nd May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Summer_Camp_-_Day_3_-_22nd_May_2019/img2.jpg", link: "https://photos.app.goo.gl/AJiADW89rPmzuWPX8" },
    { title: "Sri Sathya Sai Balvikas Summer Camp - Day 2 - 21st May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Summer_Camp_-_Day_2_-_21st_May_2019/img4.jpg", link: "https://photos.app.goo.gl/RMv6jkqPNzF6Vb9aA" },
    { title: "Sri Sathya Sai Balvikas Summer Camp - Day 1 - 20th May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Summer_Camp_-_Day_1_-_20th_May_2019/img3.jpg", link: "https://photos.app.goo.gl/wEZcZXjhvZXMzggP8" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 06th May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_06th_May_2019/img5.jpg", link: "https://photos.app.goo.gl/4iQTutJ4x8FhdAx4A" },
    { title: "Eshwaramma Week - Day 5 - 05th May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_5_-_05th_May_2019/img2.jpg", link: "https://photos.app.goo.gl/xUusK6dm5MvEHQWA8" },
    { title: "Eshwaramma Week - Day 4 - 04th May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_4_-_04th_May_2019/img5.jpg", link: "https://photos.app.goo.gl/oYkcMYVRsLCVV6Ep8" },
    { title: "Eshwaramma Week - Day 3 - 03rd May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_3_-_03rd_May_2019/img3.jpg", link: "https://photos.app.goo.gl/381h26vD2zr4tv6b9" },
    { title: "Eshwaramma Week - Day 2 - 02nd May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_2_-_02nd_May_2019/img2.jpg", link: "https://photos.app.goo.gl/bmnL7Q3ibFxEYuJy8" },
    { title: "Eshwaramma Week - Day 1 - 01st May 2019", year: "2019", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_-_Day_1_-_01st_May_2019/img5.jpg", link: "https://photos.app.goo.gl/jjns9DTdJhePQ8LBA" },
    { title: "Aradhana Day Special Nagarsankirtan - 24th April 2019", year: "2019", month: "April", image: "DownloadedPhotos/Aradhana_Day_Special_Nagarsankirtan_-_24th_April_2019/img4.jpg", link: "https://photos.app.goo.gl/8cPoymyVFdY6RL1A7" },
    { title: "Maha Narayan Seva - 21st Apr 2019", year: "2019", month: "April", image: "DownloadedPhotos/Maha_Narayan_Seva_-_21st_Apr_2019/img1.jpg", link: "https://photos.app.goo.gl/gExwQDevm5b6MrZX8" },
    { title: "Gayatri Havan at Shri Yemula Laxminarayana’s Residence - 13th April 2019", year: "2019", month: "April", image: "DownloadedPhotos/Gayatri_Havan_at_Shri_Yemula_Laxminarayana’s_Residence_-_13th_April_2019/img1.jpg", link: "https://photos.app.goo.gl/dWEXUKePU64V4KFX8" },
    { title: "Monthly Narayan Seva - 30th March 2019", year: "2019", month: "March", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_30th_March_2019/img4.jpg", link: "https://photos.app.goo.gl/Lp6vDZbDpozBCbdZ8" },
    { title: "Ugadi Special Nagarsankirtan - 06th March 2019", year: "2019", month: "March", image: "DownloadedPhotos/Ugadi_Special_Nagarsankirtan_-_06th_March_2019/img4.jpg", link: "https://photos.app.goo.gl/ND2SYR34EeF1cwkN6" },
    { title: "Sadana Camp to Sadguru Anand Prem Ashram, Karjat on 24 Feb 2019 by Worli Sai Samithi.", year: "2019", month: "February", image: "DownloadedPhotos/Sadana_Camp_to_Sadguru_Anand_Prem_Ashram,_Karjat_on_24_Feb_2019_by_Worli_Sai_Samithi./img1.jpg", link: "https://photos.app.goo.gl/6NNk6ZLViawSpDZr9" },
    { title: "Monthly Narayan Seva - 26th Jan 2019", year: "2019", month: "January", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_26th_Jan_2019/img2.jpg", link: "https://photos.app.goo.gl/Ukn7UMMw9eT5M7jJ6" },
    { title: "Sri Sathya Sai Balvikas Sports Meet - 20th Jan 2019", year: "2019", month: "January", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Sports_Meet_-_20th_Jan_2019/img3.jpg", link: "https://photos.app.goo.gl/oEfnGfQ6usGiwtt59" },
    { title: "Happy New Year 2019 - Worli Sai Samithi.", year: "2019", month: "January", image: "DownloadedPhotos/Happy_New_Year_2019_-_Worli_Sai_Samithi./img5.jpg", link: "https://photos.app.goo.gl/929WKyLqJKmXTYSRA" },
    { title: "Bhagwan Baba 93rd Birthday Celebration on 23 Nov 2018 - Worli Samithi", year: "2018", month: "November", image: "DownloadedPhotos/Bhagwan_Baba_93rd_Birthday_Celebration_on_23_Nov_2018_-_Worli_Samithi/img3.jpg", link: "https://photos.app.goo.gl/s3Dp6kZFbWAom2U89" },
    { title: "Bhagwan Baba's 93rd Birthday Celebrations by Worli Samithi on 18 Nov 2018", year: "2018", month: "November", image: "DownloadedPhotos/Bhagwan_Baba's_93rd_Birthday_Celebrations_by_Worli_Samithi_on_18_Nov_2018/img1.jpg", link: "https://photos.app.goo.gl/wBgHTvXAhYkQuT1x9" },
    { title: "Sri Sathya Sai Balvikas Worli, Day 1 - 17th June 2018", year: "2018", month: "November", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Worli,_Day_1_-_17th_June_2018/img5.jpg", link: "https://photos.app.goo.gl/Sb9gw1Tttx6QmPcr5" },
    { title: "Sathya Sai Vratham @ DK on 28 Oct 18 - Worli Sai Samthi", year: "2018", month: "October", image: "DownloadedPhotos/Sathya_Sai_Vratham_@_DK_on_28_Oct_18_-_Worli_Sai_Samthi/img4.jpg", link: "https://photos.app.goo.gl/4cqQX92PuKVyxYzy9" },
    { title: "Dussehra Nagarsankirtan - 18th October 2018", year: "2018", month: "October", image: "DownloadedPhotos/Dussehra_Nagarsankirtan_-_18th_October_2018/img4.jpg", link: "https://photos.app.goo.gl/r3mmkyJhzN4fTkbg7" },
    { title: "Monthly Narayan Seva - 13th Oct 2018", year: "2018", month: "October", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_13th_Oct_2018/img5.jpg", link: "https://photos.app.goo.gl/4oaqATxv8SKAnYXC7" },
    { title: "Raksha Bandhan Celebrations- 26th August 2018", year: "2018", month: "August", image: "DownloadedPhotos/Raksha_Bandhan_Celebrations-_26th_August_2018/img5.jpg", link: "https://photos.app.goo.gl/Z9v3jfBfVHrKbDf1A" },
    { title: "Sri Sathya Sai Varalaxmi Vratam - 24th August 2018", year: "2018", month: "August", image: "DownloadedPhotos/Sri_Sathya_Sai_Varalaxmi_Vratam_-_24th_August_2018/img2.jpg", link: "https://photos.app.goo.gl/xEvGVGPFQhVXoMSu9" },
    { title: "Maha Mrityunjaya Dhanvantri Japa Lingabhishekam - Shri Markandeshwar Mandir - 18th August 2018", year: "2018", month: "August", image: "DownloadedPhotos/Maha_Mrityunjaya_Dhanvantri_Japa_Lingabhishekam_-_Shri_Markandeshwar_Mandir_-_18th_August_2018/img3.jpg", link: "https://photos.app.goo.gl/kGedEBYgepTPQUVC6" },
    { title: "93 Bhajan Pushpanjali - 11th Aug 2018", year: "2018", month: "August", image: "DownloadedPhotos/93_Bhajan_Pushpanjali_-_11th_Aug_2018/img4.jpg", link: "https://photos.app.goo.gl/T4GEYJz7z3tKkCEx7" },
    { title: "Tree Plantation - 05th August 2018", year: "2018", month: "August", image: "DownloadedPhotos/Tree_Plantation_-_05th_August_2018/img3.jpg", link: "https://photos.app.goo.gl/2hLxFdRy3jy9SewD7" },
    { title: "Monthly Narayan Seva - 28th July 2018", year: "2018", month: "July", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_28th_July_2018/img1.jpg", link: "https://photos.app.goo.gl/qHwVTyrPToLYEsSs7" },
    { title: "Guru Pournima Celebrations - 27th July 2018", year: "2018", month: "July", image: "DownloadedPhotos/Guru_Pournima_Celebrations_-_27th_July_2018/img1.jpg", link: "https://photos.app.goo.gl/CmPdhvfTau6C4ZuQ8" },
    { title: "Ashadhi Ekadashi Celebrations - 23rd July 2018", year: "2018", month: "July", image: "DownloadedPhotos/Ashadhi_Ekadashi_Celebrations_-_23rd_July_2018/img3.jpg", link: "https://photos.app.goo.gl/ZUXcaJvpdGsb6GoQ8" },
    { title: "Sri Sathya Sai Balvikas New Gurus’ Training - Part 2 - 22nd July 2018", year: "2018", month: "July", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_New_Gurus’_Training_-_Part_2_-_22nd_July_2018/img4.jpg", link: "https://photos.app.goo.gl/k5ySX4F2HG59FXmq6" },
    { title: "Sri Sathya Sai Balvikas New Gurus’ Training - 15th July 2018", year: "2018", month: "July", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_New_Gurus’_Training_-_15th_July_2018/img1.jpg", link: "https://photos.app.goo.gl/okNSe17U9cJyKBxEA" },
    { title: "Monthly Narayan Seva - 08th July 2018", year: "2018", month: "July", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_08th_July_2018/img1.jpg", link: "https://photos.app.goo.gl/4xj2CNW8CwcDDzqXA" },
    { title: "Mega Blood Donation Camp - 02nd June 2018", year: "2018", month: "June", image: "DownloadedPhotos/Mega_Blood_Donation_Camp_-_02nd_June_2018/img4.jpg", link: "https://photos.app.goo.gl/JdXVp2ps5LeR8xfa2" },
    { title: "Monthly Narayan Seva - 26th May 2018", year: "2018", month: "May", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_26th_May_2018/img2.jpg", link: "https://photos.app.goo.gl/sS6EPwAXNmPNiRR03" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 6th May 2018", year: "2018", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_6th_May_2018/img1.jpg", link: "https://photos.app.goo.gl/bGkX1CDHjCG3Ui4u1" },
    { title: "Aradhana Day Special Nagarsankirtan - 24th April 2018", year: "2018", month: "April", image: "DownloadedPhotos/Aradhana_Day_Special_Nagarsankirtan_-_24th_April_2018/img5.jpg", link: "https://photos.app.goo.gl/uj5Dz3Xm3rUtff4T6" },
    { title: "Maha Narayan Seva - 22nd Apr 2018", year: "2018", month: "April", image: "DownloadedPhotos/Maha_Narayan_Seva_-_22nd_Apr_2018/img3.jpg", link: "https://photos.app.goo.gl/7LmGtXgisVeZzmzC6" },
    { title: "Gayatri Havan at Shri Bale Shyam’s Residence - 7th April 2018", year: "2018", month: "April", image: "DownloadedPhotos/Gayatri_Havan_at_Shri_Bale_Shyam’s_Residence_-_7th_April_2018/img4.jpg", link: "https://photos.app.goo.gl/EydCK2hUd7MaC3DE3" },
    { title: "Monthly Narayan Seva - 24th Mar 2018", year: "2018", month: "March", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_24th_Mar_2018/img2.jpg", link: "https://photos.app.goo.gl/qd9KJoBXTYJ2J6g02" },
    { title: "Ugadi Special Nagarsankirtan - 18th March 2018", year: "2018", month: "March", image: "DownloadedPhotos/Ugadi_Special_Nagarsankirtan_-_18th_March_2018/img1.jpg", link: "https://photos.app.goo.gl/02pFU0BIhuZOhUOR2" },
    { title: "Monthly Narayan Seva - 24th Feb 2018", year: "2018", month: "February", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_24th_Feb_2018/img2.jpg", link: "https://photos.app.goo.gl/dJXAbi81RJucl4Mq2" },
    { title: "Spiritual Sadhana Camp at Sri Sathya Sai Kshetra - Chinchmal, Karjat - 18th Feb 2018", year: "2018", month: "February", image: "DownloadedPhotos/Spiritual_Sadhana_Camp_at_Sri_Sathya_Sai_Kshetra_-_Chinchmal,_Karjat_-_18th_Feb_2018/img5.jpg", link: "https://photos.app.goo.gl/SGu0cfuRbYUhSEG53" },
    { title: "Monthly Narayan Seva - 27th Jan 2018", year: "2018", month: "January", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_27th_Jan_2018/img4.jpg", link: "https://photos.app.goo.gl/ry2994Mae1u7FCUN2" },
    { title: "Christmas Celebrations at Dharmakshetra - 25th Dec 2017", year: "2017", month: "December", image: "DownloadedPhotos/Christmas_Celebrations_at_Dharmakshetra_-_25th_Dec_2017/img5.jpg", link: "https://photos.app.goo.gl/QiaZoBT8SR2UGeCX9" },
    { title: "Monthly Narayan Seva - 23rd Dec 2017", year: "2017", month: "December", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_23rd_Dec_2017/img5.jpg", link: "https://photos.app.goo.gl/5urFBoG9eEozrEcS2" },
    { title: "Felicitation of Senior Devotees at Dharmakshetra - 10th Dec 2017", year: "2017", month: "December", image: "DownloadedPhotos/Felicitation_of_Senior_Devotees_at_Dharmakshetra_-_10th_Dec_2017/img2.jpg", link: "https://photos.app.goo.gl/YyPRyg98YzrcBvMc9" },
    { title: "Maha Narayan Seva - 26th Nov 2017", year: "2017", month: "November", image: "DownloadedPhotos/Maha_Narayan_Seva_-_26th_Nov_2017/img2.jpg", link: "https://photos.app.goo.gl/PwYj7OulKhpaUQu12" },
    { title: "92nd Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 19th Nov 2017", year: "2017", month: "November", image: "DownloadedPhotos/92nd_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_19th_Nov_2017/img1.jpg", link: "https://photos.app.goo.gl/M4BF8OprOio0NSVz2" },
    { title: "Gayatri Havan at Shri Kattekola Venkatrajam’s Residence - 16th Nov 2017", year: "2017", month: "November", image: "DownloadedPhotos/Gayatri_Havan_at_Shri_Kattekola_Venkatrajam’s_Residence_-_16th_Nov_2017/img1.jpg", link: "https://photos.app.goo.gl/UB8mvbVZ3icC7Pe66" },
    { title: "Ekadasha Rudrabhishekam - 5th Nov 2017", year: "2017", month: "November", image: "DownloadedPhotos/Ekadasha_Rudrabhishekam_-_5th_Nov_2017/img3.jpg", link: "https://photos.app.goo.gl/i1Y9um0VUq9jxkvs2" },
    { title: "Monthly Narayan Seva - 29th Oct 2017", year: "2017", month: "October", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_29th_Oct_2017/img4.jpg", link: "https://photos.app.goo.gl/XOgJRxPiUPEjOnE33" },
    { title: "92 Bhajana Pushpanjali (2) - 28th October 2017", year: "2017", month: "October", image: "DownloadedPhotos/92_Bhajana_Pushpanjali_(2)_-_28th_October_2017/img1.jpg", link: "https://photos.app.goo.gl/lYspTXqsukM0KE1e2" },
    { title: "Swacchata se Divyata tak (Cleaning Seva) - Shivaji Park - 08th October 2017", year: "2017", month: "October", image: "DownloadedPhotos/Swacchata_se_Divyata_tak_(Cleaning_Seva)_-_Shivaji_Park_-_08th_October_2017/img3.jpg", link: "https://photos.app.goo.gl/bjvV4ZLCAOvOd6oD3" },
    { title: "Monthly Narayan Seva - 01st Oct 2017", year: "2017", month: "October", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_01st_Oct_2017/img1.jpg", link: "https://photos.app.goo.gl/aB7Q3aJjUyCuGMNQ2" },
    { title: "Dussehra Nagarsankirtan - 30th Sept 2017", year: "2017", month: "September", image: "DownloadedPhotos/Dussehra_Nagarsankirtan_-_30th_Sept_2017/img2.jpg", link: "https://photos.app.goo.gl/52arAADS3DxAiswq2" },
    { title: "Shravan Celebrations - 2017", year: "2017", month: "September", image: "DownloadedPhotos/Shravan_Celebrations_-_2017/img5.jpg", link: "https://photos.app.goo.gl/6tjI8rPV2dki1H0K3" },
    { title: "Monthly Narayan Seva - 27th Aug 2017", year: "2017", month: "August", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_27th_Aug_2017/img1.jpg", link: "https://goo.gl/photos/fY4b6ij8NTia1tZ9A" },
    { title: "Rakshabandhan Celebrations - 06th August 2017", year: "2017", month: "August", image: "DownloadedPhotos/Rakshabandhan_Celebrations_-_06th_August_2017/img3.jpg", link: "https://photos.app.goo.gl/xGIpmcxSXUOPibdj2" },
    { title: "Sri Sathya Sai Varalaxmi Vratam - 4th August 2017", year: "2017", month: "August", image: "DownloadedPhotos/Sri_Sathya_Sai_Varalaxmi_Vratam_-_4th_August_2017/img5.jpg", link: "https://goo.gl/photos/CqwVtJjVY3awc2SEA" },
    { title: "Shramdaan - Tree Plantation Drive - 30th July 2017", year: "2017", month: "July", image: "DownloadedPhotos/Shramdaan_-_Tree_Plantation_Drive_-_30th_July_2017/img5.jpg", link: "https://photos.app.goo.gl/HxR8PDZVOpAreZJb2" },
    { title: "Maha Mrityunjaya Dhanvantri Japa Lingabhishekam - Shri Markandeshwar Mandir - 29th July 2017", year: "2017", month: "July", image: "DownloadedPhotos/Maha_Mrityunjaya_Dhanvantri_Japa_Lingabhishekam_-_Shri_Markandeshwar_Mandir_-_29th_July_2017/img1.jpg", link: "https://photos.app.goo.gl/iDPhVJVJqhPvZ7EO2" },
    { title: "Monthly Narayan Seva - 23rd July 2017", year: "2017", month: "July", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_23rd_July_2017/img2.jpg", link: "https://photos.app.goo.gl/RoS0pDP0fbQJKoPA3" },
    { title: "92 Bhajana Pushpanjali (1) - 22nd July 2017", year: "2017", month: "July", image: "DownloadedPhotos/92_Bhajana_Pushpanjali_(1)_-_22nd_July_2017/img4.jpg", link: "https://photos.app.goo.gl/EXq5fLlALLBkHXOl1" },
    { title: "Guru Pournima Celebrations - 9th July 2017", year: "2017", month: "July", image: "DownloadedPhotos/Guru_Pournima_Celebrations_-_9th_July_2017/img4.jpg", link: "https://goo.gl/photos/Jg65JrYSCLAr2Das6" },
    { title: "Ashadhi Ekadashi Celebrations - 04th July 2017", year: "2017", month: "July", image: "DownloadedPhotos/Ashadhi_Ekadashi_Celebrations_-_04th_July_2017/img3.jpg", link: "https://photos.app.goo.gl/K0g4VxrBH36LyHaC3" },
    { title: "Monthly Narayan Seva - 25th June 2017", year: "2017", month: "June", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_25th_June_2017/img5.jpg", link: "https://goo.gl/photos/Q6S8Jn5qQrS4NGTKA" },
    { title: "Monthly Narayan Seva - 28th May 2017", year: "2017", month: "May", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_28th_May_2017/img1.jpg", link: "https://goo.gl/photos/Y7F4DQ63WqB2Vo4f8" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 6th May 2017", year: "2017", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_6th_May_2017/img5.jpg", link: "https://photos.app.goo.gl/VfpxYsqmC5y9Bu4S2" },
    { title: "Aradhana Day Special Nagarsankirtan - 24th April 2017", year: "2017", month: "April", image: "DownloadedPhotos/Aradhana_Day_Special_Nagarsankirtan_-_24th_April_2017/img1.jpg", link: "https://photos.app.goo.gl/birTOcqBxalG03S63" },
    { title: "Monthly Narayan Seva - 23rd Apr 2017", year: "2017", month: "April", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_23rd_Apr_2017/img4.jpg", link: "https://goo.gl/photos/DYsve2Pjr6TEd8Wd9" },
    { title: "Ugadi Special Nagarsankirtan - 28th March 2017", year: "2017", month: "March", image: "DownloadedPhotos/Ugadi_Special_Nagarsankirtan_-_28th_March_2017/img1.jpg", link: "https://photos.app.goo.gl/9YrLbQfwLZRHGEI72" },
    { title: "Monthly Narayan Seva - 25th Mar 2017", year: "2017", month: "March", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_25th_Mar_2017/img3.jpg", link: "https://goo.gl/photos/uVdP2zcP1mMcdqSF7" },
    { title: "Monthly Narayan Seva - 26th Feb 2017", year: "2017", month: "February", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_26th_Feb_2017/img2.jpg", link: "https://goo.gl/photos/ooJPhf4cwroR34mQ6" },
    { title: "Medical Camp at Orphanage - 26th Feb 2017", year: "2017", month: "February", image: "DownloadedPhotos/Medical_Camp_at_Orphanage_-_26th_Feb_2017/img5.jpg", link: "https://goo.gl/photos/bxNhitSpbgXw9g8Y7" },
    { title: "Spiritual Sadhana Camp at Ganegaon, Karjat - 12th Feb 2017", year: "2017", month: "February", image: "DownloadedPhotos/Spiritual_Sadhana_Camp_at_Ganegaon,_Karjat_-_12th_Feb_2017/img2.jpg", link: "https://goo.gl/photos/ZuwWaFFZws9H7ude8" },
    { title: "Monthly Narayan Seva - 28th Jan 2017", year: "2017", month: "January", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_28th_Jan_2017/img5.jpg", link: "https://photos.app.goo.gl/7rGJQ3ibVn1oN9R73" },
    { title: "New Year Special Nagarsankirtan - 1st Jan 2017", year: "2017", month: "January", image: "DownloadedPhotos/New_Year_Special_Nagarsankirtan_-_1st_Jan_2017/img5.jpg", link: "https://photos.app.goo.gl/E8SNLKVUWtunWvLy2" },
    { title: "Sai Tarang - Children's Festival of Joy - Dharmakshetra - 10th December 2016", year: "2016", month: "December", image: "DownloadedPhotos/Sai_Tarang_-_Children's_Festival_of_Joy_-_Dharmakshetra_-_10th_December_2016/img4.jpg", link: "https://photos.app.goo.gl/ZOrV8pMyTzATlRDr2" },
    { title: "Special Nagarsankirtan and Cake Cutting on 91st Birthday of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2016", year: "2016", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_91st_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2016/img1.jpg", link: "https://photos.app.goo.gl/2tSboUcfMDx2E4X83" },
    { title: "91st Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 20th Nov 2016", year: "2016", month: "November", image: "DownloadedPhotos/91st_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_20th_Nov_2016/img3.jpg", link: "https://photos.app.goo.gl/SkrpqVJk79vncDEZ2" },
    { title: "Gram Seva - 13th Nov 2016", year: "2016", month: "November", image: "DownloadedPhotos/Gram_Seva_-_13th_Nov_2016/img2.jpg", link: "https://goo.gl/photos/aopLfqNMzDzogSp49" },
    { title: "91 Bhajan Pushpanjali - 5th Nov 2016", year: "2016", month: "November", image: "DownloadedPhotos/91_Bhajan_Pushpanjali_-_5th_Nov_2016/img3.jpg", link: "https://photos.app.goo.gl/emHZYFT2aOSQFEmI3" },
    { title: "Shramdaan - Cleanliness Drive - Shivaji Park - 16th Oct 2016", year: "2016", month: "October", image: "DownloadedPhotos/Shramdaan_-_Cleanliness_Drive_-_Shivaji_Park_-_16th_Oct_2016/img5.jpg", link: "https://photos.app.goo.gl/vrluAyt2y4QlVnxy1" },
    { title: "Shramdaan - Markandeshwar Mandir Cleaning - 21st Aug 2016", year: "2016", month: "August", image: "DownloadedPhotos/Shramdaan_-_Markandeshwar_Mandir_Cleaning_-_21st_Aug_2016/img5.jpg", link: "https://photos.app.goo.gl/00NyebiP6rkFChgG3" },
    { title: "Sri Sathya Sai Varalaxmi Vratam - 12th August 2016", year: "2016", month: "August", image: "DownloadedPhotos/Sri_Sathya_Sai_Varalaxmi_Vratam_-_12th_August_2016/img3.jpg", link: "https://photos.app.goo.gl/mkw1UYnTqDzYXYH02" },
    { title: "Raksha Bandhan Celebrations - 18th Aug 2016", year: "2016", month: "August", image: "DownloadedPhotos/Raksha_Bandhan_Celebrations_-_18th_Aug_2016/img4.jpg", link: "https://photos.app.goo.gl/vr25basa1vfF0KEV2" },
    { title: "Shravan Celebrations - 2016", year: "2016", month: "August", image: "DownloadedPhotos/Shravan_Celebrations_-_2016/img1.jpg", link: "https://photos.app.goo.gl/GeLtKs5WfS7POpoi1" },
    { title: "Disaster Management - 30th and 31st July 2016", year: "2016", month: "July", image: "DownloadedPhotos/Disaster_Management_-_30th_and_31st_July_2016/img1.jpg", link: "https://photos.app.goo.gl/5RGGFfa7A85Dvgeu2" },
    { title: "Guru Pournima Celebrations - 19th July 2016", year: "2016", month: "July", image: "DownloadedPhotos/Guru_Pournima_Celebrations_-_19th_July_2016/img3.jpg", link: "https://photos.app.goo.gl/4gTo0tyumxUXwu1C2" },
    { title: "Ashadhi Ekadashi Celebrations - 15th July 2016", year: "2016", month: "July", image: "DownloadedPhotos/Ashadhi_Ekadashi_Celebrations_-_15th_July_2016/img4.jpg", link: "https://photos.app.goo.gl/LkRJFLwn1XeU77Gg1" },
    { title: "Sri Sathya Sai Balvikas Balvikas Summer Camp - May 2016", year: "2016", month: "May", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Balvikas_Summer_Camp_-_May_2016/img1.jpg", link: "https://photos.app.goo.gl/5BzfH7nf8lPylSNi1" },
    { title: "Eshwaramma Week Celebrations - May 2016", year: "2016", month: "May", image: "DownloadedPhotos/Eshwaramma_Week_Celebrations_-_May_2016/img1.jpg", link: "https://photos.app.goo.gl/17RWIN1rU2SG6Zmn1" },
    { title: "Aradhana Day Special Nagarsankirtan - 24th April 2016", year: "2016", month: "April", image: "DownloadedPhotos/Aradhana_Day_Special_Nagarsankirtan_-_24th_April_2016/img4.jpg", link: "https://photos.app.goo.gl/CNOkB9ssLWgIRTe22" },
    { title: "Ugadi Special Nagarsankirtan - 8th April 2016", year: "2016", month: "April", image: "DownloadedPhotos/Ugadi_Special_Nagarsankirtan_-_8th_April_2016/img1.jpg", link: "https://photos.app.goo.gl/qmYLlqQKOoy4vQEG2" },
    { title: "Spiritual Sadhana Camp at Sri Sathya Sai Pandurang Kshetra, Hadshi - 21st Feb 2016", year: "2016", month: "February", image: "DownloadedPhotos/Spiritual_Sadhana_Camp_at_Sri_Sathya_Sai_Pandurang_Kshetra,_Hadshi_-_21st_Feb_2016/img2.jpg", link: "https://photos.app.goo.gl/aQrEgTmVFLGw0JRO2" },
    { title: "Republic Day Celebrations at Dharmakshetra - 26th Jan 2016", year: "2016", month: "January", image: "DownloadedPhotos/Republic_Day_Celebrations_at_Dharmakshetra_-_26th_Jan_2016/img4.jpg", link: "https://goo.gl/photos/gPMLEMGdxsXFRfUu7" },
    { title: "New Year Special Nagarsankirtan - 1st Jan 2016", year: "2016", month: "January", image: "DownloadedPhotos/New_Year_Special_Nagarsankirtan_-_1st_Jan_2016/img3.jpg", link: "https://photos.app.goo.gl/0EO9gFw8NjYmxJsA2" },
    { title: "Walk for Values - 29th November 2015", year: "2015", month: "December", image: "DownloadedPhotos/Walk_for_Values_-_29th_November_2015/img4.jpg", link: "https://photos.app.goo.gl/0uzBmPyKQ0FNQhxm2" },
    { title: "Christmas Celebrations by Balvikas Children - 25th Dec 2015", year: "2015", month: "December", image: "DownloadedPhotos/Christmas_Celebrations_by_Balvikas_Children_-_25th_Dec_2015/img5.jpg", link: "https://photos.app.goo.gl/kTtMog435sUxvXT32" },
    { title: "Special Nagarsankirtan and Cake Cutting on 90th Birthday of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2015", year: "2015", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_90th_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2015/img4.jpg", link: "https://photos.app.goo.gl/kwF3HPwEodTwAcmN2" },
    { title: "90th Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 22nd Nov 2015", year: "2015", month: "November", image: "DownloadedPhotos/90th_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_22nd_Nov_2015/img4.jpg", link: "https://goo.gl/photos/WdsArUfgezM99CMv6" },
    { title: "90 Bhajan Pushpanjali (2) - 1st Nov 2015", year: "2015", month: "November", image: "DownloadedPhotos/90_Bhajan_Pushpanjali_(2)_-_1st_Nov_2015/img1.jpg", link: "https://photos.app.goo.gl/wCQDr5Q0jJoWhwBP2" },
    { title: "Sri Sathya Sai Varalaxmi Vratam - 28th August 2015", year: "2015", month: "August", image: "DownloadedPhotos/Sri_Sathya_Sai_Varalaxmi_Vratam_-_28th_August_2015/img2.jpg", link: "https://goo.gl/photos/BwbUnX5zJwmYKc9r9" },
    { title: "Monthly Narayan Seva - 15th August 2015", year: "2015", month: "August", image: "DownloadedPhotos/Monthly_Narayan_Seva_-_15th_August_2015/img4.jpg", link: "https://goo.gl/photos/JqzzMbRcetq4fqFv6" },
    { title: "Shravan Celebrations - 2015", year: "2015", month: "August", image: "DownloadedPhotos/Shravan_Celebrations_-_2015/img2.jpg", link: "https://photos.app.goo.gl/uyX1tdXCscQL380C2" },
    { title: "Sri Sathya Sai Vrata Kalpamu - 31st July 2015", year: "2015", month: "July", image: "DownloadedPhotos/Sri_Sathya_Sai_Vrata_Kalpamu_-_31st_July_2015/img1.jpg", link: "https://photos.app.goo.gl/Oxow3zLZgFQiuwMj1" },
    { title: "Residential Rudrabhishekam at Shri Dasari Vinod's Residence - 5th July 2015", year: "2015", month: "July", image: "DownloadedPhotos/Residential_Rudrabhishekam_at_Shri_Dasari_Vinod's_Residence_-_5th_July_2015/img5.jpg", link: "https://photos.app.goo.gl/Jlh7N6RV6HNIfYPF2" },
    { title: "Shramdaan - Tree Plantation Drive - Hariyali Thane - 28th June 2015", year: "2015", month: "June", image: "DownloadedPhotos/Shramdaan_-_Tree_Plantation_Drive_-_Hariyali_Thane_-_28th_June_2015/img4.jpg", link: "https://photos.app.goo.gl/IyBKTCpkUUJj3wUA2" },
    { title: "90 Bhajan Pushpanjali (1) - 28th June 2015", year: "2015", month: "June", image: "DownloadedPhotos/90_Bhajan_Pushpanjali_(1)_-_28th_June_2015/img2.jpg", link: "https://photos.app.goo.gl/rcCrTYSQTCf0JEO33" },
    { title: "Residential Rudrabhishekam at Smt Chiluka Saraswati's Residence - 10th May 2015", year: "2015", month: "May", image: "DownloadedPhotos/Residential_Rudrabhishekam_at_Smt_Chiluka_Saraswati's_Residence_-_10th_May_2015/img2.jpg", link: "https://photos.app.goo.gl/KOdKkmEiL1q8vSbw1" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 6th May 2015", year: "2015", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_6th_May_2015/img2.jpg", link: "https://photos.app.goo.gl/d2ousSnbOZjsEkTu2" },
    { title: "Eshwaramma Day Celebrations - 3rd May 2015", year: "2015", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Celebrations_-_3rd_May_2015/img2.jpg", link: "https://photos.app.goo.gl/NbXNMfvyirJUBH0p2" },
    { title: "Ekadasha Rudrabhishekam - 22nd March 2015", year: "2015", month: "March", image: "DownloadedPhotos/Ekadasha_Rudrabhishekam_-_22nd_March_2015/img4.jpg", link: "https://photos.app.goo.gl/xVpBRHAmja3GOxkl2" },
    { title: "Ugadi Special Nagarsankirtan - 21st March 2015", year: "2015", month: "March", image: "DownloadedPhotos/Ugadi_Special_Nagarsankirtan_-_21st_March_2015/img1.jpg", link: "https://photos.app.goo.gl/RGwtNZn9BO1EHix03" },
    { title: "Prasadam Distribution to Sri Sathya Sai Balvikas Children - 22nd Feb 2015", year: "2015", month: "February", image: "DownloadedPhotos/Prasadam_Distribution_to_Sri_Sathya_Sai_Balvikas_Children_-_22nd_Feb_2015/img5.jpg", link: "https://photos.app.goo.gl/6VeA9V72mynSu72V2" },
    { title: "Mahashivratri Celebrations at Dharmakshetra - 15th Feb 2015", year: "2015", month: "February", image: "DownloadedPhotos/Mahashivratri_Celebrations_at_Dharmakshetra_-_15th_Feb_2015/img2.jpg", link: "https://photos.app.goo.gl/U5r8jXp8VJ9DtZAU2" },
    { title: "Shiva Lingam Blessed by Swami - 29th Jan 2015", year: "2015", month: "January", image: "DownloadedPhotos/Shiva_Lingam_Blessed_by_Swami_-_29th_Jan_2015/img3.jpg", link: "https://photos.app.goo.gl/HlhupRV0BoTz8tDW2" },
    { title: "Gram Seva - Kasara - 11th Jan 2015", year: "2015", month: "January", image: "DownloadedPhotos/Gram_Seva_-_Kasara_-_11th_Jan_2015/img5.jpg", link: "https://goo.gl/photos/rFhr1TL8LkEXsMKA6" },
    { title: "New Year Special Nagarsankirtan - 1st Jan 2015", year: "2015", month: "January", image: "DownloadedPhotos/New_Year_Special_Nagarsankirtan_-_1st_Jan_2015/img3.jpg", link: "https://photos.app.goo.gl/YdVMuma2qdTb7Rvq1" },
    { title: "Youth Awareness Program - Poster Competition - Dec 2014", year: "2014", month: "December", image: "DownloadedPhotos/Youth_Awareness_Program_-_Poster_Competition_-_Dec_2014/img2.jpg", link: "https://photos.app.goo.gl/pNESPNlipIQVVofs2" },
    { title: "Ugadi Special Nagarsankirtan - 31st March 2014", year: "2014", month: "December", image: "DownloadedPhotos/Ugadi_Special_Nagarsankirtan_-_31st_March_2014/img5.jpg", link: "https://photos.app.goo.gl/0CdoTSR0HvrqrTRp2" },
    { title: "Shramdaan - Borivali National Park - 30th Nov 2014", year: "2014", month: "November", image: "DownloadedPhotos/Shramdaan_-_Borivali_National_Park_-_30th_Nov_2014/img3.jpg", link: "https://photos.app.goo.gl/isDAALfGtmrvR3Qf2" },
    { title: "Special Nagarsankirtan and Cake Cutting on 89th Birthday of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2014", year: "2014", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_89th_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2014/img1.jpg", link: "https://photos.app.goo.gl/FcDtswtUucgDTvAv1" },
    { title: "89th Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 16th Nov 2014", year: "2014", month: "November", image: "DownloadedPhotos/89th_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_16th_Nov_2014/img4.jpg", link: "https://photos.app.goo.gl/v2rjBetkuFghtEpn1" },
    { title: "Sri Sathya Sai Varalaxmi Vratam - 8th August 2014", year: "2014", month: "August", image: "DownloadedPhotos/Sri_Sathya_Sai_Varalaxmi_Vratam_-_8th_August_2014/img2.jpg", link: "https://photos.app.goo.gl/1WP2S0sxCCFWL9Fm1" },
    { title: "Guru Pournima Celebrations - 12th July 2014", year: "2014", month: "July", image: "DownloadedPhotos/Guru_Pournima_Celebrations_-_12th_July_2014/img1.jpg", link: "https://photos.app.goo.gl/K3ZUqcm72mfDAkIG3" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 6th May 2014", year: "2014", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_6th_May_2014/img5.jpg", link: "https://photos.app.goo.gl/HAuFpENPT94DbBaA2" },
    { title: "Eshwaramma Day Celebrations - 4th May 2014", year: "2014", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Celebrations_-_4th_May_2014/img5.jpg", link: "https://photos.app.goo.gl/zTdJI7keQN7UbgzS2" },
    { title: "Sri Sathya Sai Balvikas Parents' Sadhana Camp - 23rd Feb 2014", year: "2014", month: "February", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Parents'_Sadhana_Camp_-_23rd_Feb_2014/img4.jpg", link: "https://photos.app.goo.gl/j6FyhqAlIGVqb6Zi1" },
    { title: "Republic Day Celebrations - Dharmakshetra - 26th Jan 2014", year: "2014", month: "January", image: "DownloadedPhotos/Republic_Day_Celebrations_-_Dharmakshetra_-_26th_Jan_2014/img3.jpg", link: "https://goo.gl/photos/cUVd4C4K89GfhoXT7" },
    { title: "Dharmakhetra Cleaning Seva - 19th Jan 2014, 24th Jan 2016", year: "2014", month: "January", image: "DownloadedPhotos/Dharmakhetra_Cleaning_Seva_-_19th_Jan_2014,_24th_Jan_2016/img4.jpg", link: "https://goo.gl/photos/2pzunteQWumjqS257" },
    { title: "New Year Special Nagarsankirtan - 1st Jan 2014", year: "2014", month: "January", image: "DownloadedPhotos/New_Year_Special_Nagarsankirtan_-_1st_Jan_2014/img1.jpg", link: "https://photos.app.goo.gl/mRrC3cK0vWgjNmW83" },
    { title: "88th Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 24th Nov 2013", year: "2013", month: "November", image: "DownloadedPhotos/88th_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_24th_Nov_2013/img1.jpg", link: "https://photos.app.goo.gl/XcRWtor65p2rzRjF2" },
    { title: "Special Nagarsankirtan and Cake Cutting on 88th Birthday of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2013", year: "2013", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_88th_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2013/img5.jpg", link: "https://photos.app.goo.gl/KcTHfvik1Jb1menS2" },
    { title: "Maha Mrityunjaya Dhanvantri Japa Lingabhishekam - Shri Laxminarayana Yemula’s Residence - 24th August 2013", year: "2013", month: "August", image: "DownloadedPhotos/Maha_Mrityunjaya_Dhanvantri_Japa_Lingabhishekam_-_Shri_Laxminarayana_Yemula’s_Residence_-_24th_August_2013/img3.jpg", link: "https://photos.app.goo.gl/zKdKA2pEvboXw4Pq9" },
    { title: "Sri Sathya Sai Varalaxmi Vratam - 16th August 2013", year: "2013", month: "August", image: "DownloadedPhotos/Sri_Sathya_Sai_Varalaxmi_Vratam_-_16th_August_2013/img2.jpg", link: "https://photos.app.goo.gl/oXEKyuU1bwYEPRqF3" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 6th May 2013", year: "2013", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_6th_May_2013/img3.jpg", link: "https://photos.app.goo.gl/C9ROTTcNiHKQySJd2" },
    { title: "Rama Navami Celebrations at Dharmakshetra - 20th April 2013", year: "2013", month: "April", image: "DownloadedPhotos/Rama_Navami_Celebrations_at_Dharmakshetra_-_20th_April_2013/img5.jpg", link: "https://goo.gl/photos/xXF7DakxtDfsMsuZ7" },
    { title: "87th Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 25th Nov 2012", year: "2012", month: "November", image: "DownloadedPhotos/87th_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_25th_Nov_2012/img3.jpg", link: "https://photos.app.goo.gl/lgjBXeo2J0pEkB6G2" },
    { title: "Special Nagarsankirtan and Cake Cutting on 87th Birthday of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2012", year: "2012", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_87th_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2012/img4.jpg", link: "https://photos.app.goo.gl/DggTFT1lm9e1PRZ63" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 6th May 2012", year: "2012", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_6th_May_2012/img3.jpg", link: "https://photos.app.goo.gl/TnLX4dFruNMLrvum1" },
    { title: "Aradhana Day Narayan Seva - 24th April 2012", year: "2012", month: "April", image: "DownloadedPhotos/Aradhana_Day_Narayan_Seva_-_24th_April_2012/img1.jpg", link: "https://photos.app.goo.gl/5BJG4fERCHWDdFcu2" },
    { title: "Cultural Program at Dharmakshetra - 22nd April 2012", year: "2012", month: "April", image: "DownloadedPhotos/Cultural_Program_at_Dharmakshetra_-_22nd_April_2012/img3.jpg", link: "https://photos.app.goo.gl/W58qGtlyEmnQmFzr2" },
    { title: "Ram Navami Celebrations - Dharmakshetra - 1st April 2012", year: "2012", month: "April", image: "DownloadedPhotos/Ram_Navami_Celebrations_-_Dharmakshetra_-_1st_April_2012/img5.jpg", link: "https://goo.gl/photos/HgL8jiaoS5LqJDDn8" },
    { title: "Gram Seva - 8th Jan 2012", year: "2012", month: "January", image: "DownloadedPhotos/Gram_Seva_-_8th_Jan_2012/img2.jpg", link: "https://goo.gl/photos/5pTbuYgz35Dr1zVf8" },
    { title: "Special Nagarsankirtan and Cake Cutting on 86th Birthday of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2011", year: "2011", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_86th_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2011/img3.jpg", link: "https://photos.app.goo.gl/ynuuYEX1eL66yKTJ2" },
    { title: "86th Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 20th Nov 2011", year: "2011", month: "November", image: "DownloadedPhotos/86th_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_20th_Nov_2011/img4.jpg", link: "https://photos.app.goo.gl/8sL3mAHEIfvryNoU2" },
    { title: "Ashadhi Ekadashi Celebrations in Prashanti Nilayam - 2011", year: "2011", month: "July", image: "DownloadedPhotos/Ashadhi_Ekadashi_Celebrations_in_Prashanti_Nilayam_-_2011/img1.jpg", link: "https://photos.app.goo.gl/umPe1PdlBre9v81z1" },
    { title: "Gram Seva - Inauguration of Sri Sathya Sai Kshetra - Chinchmal Village - 5th June 2011", year: "2011", month: "June", image: "DownloadedPhotos/Gram_Seva_-_Inauguration_of_Sri_Sathya_Sai_Kshetra_-_Chinchmal_Village_-_5th_June_2011/img4.jpg", link: "https://goo.gl/photos/u4CJjQ8YXBR3JedP9" },
    { title: "Gram Seva - Penand - 29th May 2011", year: "2011", month: "May", image: "DownloadedPhotos/Gram_Seva_-_Penand_-_29th_May_2011/img2.jpg", link: "https://goo.gl/photos/sUtNFYsoRvF1PcLk8" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 6th May 2011", year: "2011", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_6th_May_2011/img3.jpg", link: "https://photos.app.goo.gl/uuWJFvlq3fmeazrI2" },
    { title: "Gram Seva - Penand - 1st May 2011", year: "2011", month: "May", image: "DownloadedPhotos/Gram_Seva_-_Penand_-_1st_May_2011/img5.jpg", link: "https://goo.gl/photos/ewRfqLhA1536H9go9" },
    { title: "Gram Seva - Bhurujwadi - 3rd April 2011", year: "2011", month: "April", image: "DownloadedPhotos/Gram_Seva_-_Bhurujwadi_-_3rd_April_2011/img2.jpg", link: "https://goo.gl/photos/3CFF4fsxidiZ7dyX7" },
    { title: "Special Nagarsankirtan and Cake Cutting on 85th Birthday of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2010", year: "2010", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_85th_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2010/img1.jpg", link: "https://photos.app.goo.gl/2GEognnCcMA7diej7" },
    { title: "85 Bhajan Pushpanjali - 19th Nov 2010", year: "2010", month: "November", image: "DownloadedPhotos/85_Bhajan_Pushpanjali_-_19th_Nov_2010/img2.jpg", link: "https://photos.app.goo.gl/kWBShJVgilGvKbqC2" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 6th May 2010", year: "2010", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_6th_May_2010/img5.jpg", link: "https://photos.app.goo.gl/i5IVKOGWoTFMBYYv1" },
    { title: "Sri Sathya Sai Balvikas Parents' Sadhana Camp - 28th March 2010", year: "2010", month: "March", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Parents'_Sadhana_Camp_-_28th_March_2010/img4.jpg", link: "https://photos.app.goo.gl/rIN4V2mbW5GLtN5k2" },
    { title: "Gram Seva - Bhurujwadi - 6th Dec 2009", year: "2009", month: "December", image: "DownloadedPhotos/Gram_Seva_-_Bhurujwadi_-_6th_Dec_2009/img1.jpg", link: "https://goo.gl/photos/L9VfJiAksaA1EwSGA" },
    { title: "Special Nagarsankirtan and Cake Cutting on 84th Birthday of Bhagwan Sri Sathya Sai Baba - 23rd nov 2009", year: "2009", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_84th_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_nov_2009/img3.jpg", link: "https://photos.app.goo.gl/KKqVekPVdr8K5xvl1" },
    { title: "84th Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 22nd Nov 2009", year: "2009", month: "November", image: "DownloadedPhotos/84th_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_22nd_Nov_2009/img1.jpg", link: "https://photos.app.goo.gl/1MpYMWvIkQiTEIZ53" },
    { title: "Ashadhi Ekadashi Celebrations in Prashanti Nilayam - 2009", year: "2009", month: "July", image: "DownloadedPhotos/Ashadhi_Ekadashi_Celebrations_in_Prashanti_Nilayam_-_2009/img2.jpg", link: "https://photos.app.goo.gl/5eugtVomnwrdIUT82" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 6th May 2009", year: "2009", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_6th_May_2009/img4.jpg", link: "https://photos.app.goo.gl/nNc2I9g6kmmBmysW2" },
    { title: "Eshwaramma Day Celebrations - 3rd May 2009", year: "2009", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Celebrations_-_3rd_May_2009/img4.jpg", link: "https://photos.app.goo.gl/XYsyXPNDD8agZdq52" },
    { title: "Special Nagarsankirtan and Cake Cutting on 83rd Birthday of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2008", year: "2008", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_83rd_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2008/img3.jpg", link: "https://photos.app.goo.gl/Y5OTXabFFcllcpSt2" },
    { title: "83rd Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 16th Nov 2008", year: "2008", month: "November", image: "DownloadedPhotos/83rd_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_16th_Nov_2008/img3.jpg", link: "https://photos.app.goo.gl/8KAwIOWlD2NdPcXW2" },
    { title: "Eshwaramma Day Special Nagarsankirtan - 6th May 2008", year: "2008", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Special_Nagarsankirtan_-_6th_May_2008/img1.jpg", link: "https://photos.app.goo.gl/By2R5BoCHbmTdWiN2" },
    { title: "Eshwaramma Day Celebrations - 4th May 2008", year: "2008", month: "May", image: "DownloadedPhotos/Eshwaramma_Day_Celebrations_-_4th_May_2008/img3.jpg", link: "https://photos.app.goo.gl/8Y3IU6wBW6UkvYxs2" },
    { title: "Gram Seva - Badlapur - April 2008", year: "2008", month: "April", image: "DownloadedPhotos/Gram_Seva_-_Badlapur_-_April_2008/img1.jpg", link: "https://goo.gl/photos/WEJHZWpYrBhXUszYA" },
    { title: "Aarti to Swami in Sai Kulwant Hall - 2007", year: "2007", month: "July", image: "DownloadedPhotos/Aarti_to_Swami_in_Sai_Kulwant_Hall_-_2007/img5.jpg", link: "https://photos.app.goo.gl/Qg7Qbc4IBYAh3dyM2" },
    { title: "Sri Sathya Sai Balvikas Worli - A Visit to Puttaparthi - 25th to 31st Dec 2006", year: "2006", month: "December", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Worli_-_A_Visit_to_Puttaparthi_-_25th_to_31st_Dec_2006/img4.jpg", link: "https://photos.app.goo.gl/M8DRjBHt8GA9Abjl1" },
    { title: "81st Birthday Celebrations of Bhagwan Sri Sathya Sai Baba - 19th Nov 2006", year: "2006", month: "November", image: "DownloadedPhotos/81st_Birthday_Celebrations_of_Bhagwan_Sri_Sathya_Sai_Baba_-_19th_Nov_2006/img3.jpg", link: "https://photos.app.goo.gl/N8qC5J7I3OpkfWbs1" },
    { title: "Sri Sathya Sai Balvikas Worli - A Visit to Puttaparthi - December 2005", year: "2005", month: "December", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Worli_-_A_Visit_to_Puttaparthi_-_December_2005/img3.jpg", link: "https://photos.app.goo.gl/HEpIdHkAC51ff2N73" },
    { title: "Sai Jal - Drinking Water Project - Bhurujwadi - 22nd Aug 2005", year: "2005", month: "August", image: "DownloadedPhotos/Sai_Jal_-_Drinking_Water_Project_-_Bhurujwadi_-_22nd_Aug_2005/img5.jpg", link: "https://goo.gl/photos/g37iJiUsPcoFUMaw9" },
    { title: "Blood Donation Camp - Tardeo - 19th Oct 2003", year: "2003", month: "October", image: "DownloadedPhotos/Blood_Donation_Camp_-_Tardeo_-_19th_Oct_2003/img5.jpg", link: "https://goo.gl/photos/Q5B5U3kQVY37FqLQ9" },
    { title: "Flood Relief Seva - 19th Jan 2003", year: "2003", month: "January", image: "DownloadedPhotos/Flood_Relief_Seva_-_19th_Jan_2003/img3.jpg", link: "https://goo.gl/photos/85uBvk8ra6UC4x8B7" },
    { title: "Special Nagarsankirtan and Cake Cutting on 76th Birthday of Bhagwan Sri Sathya Sai Baba - 23rd Nov 2001", year: "2001", month: "November", image: "DownloadedPhotos/Special_Nagarsankirtan_and_Cake_Cutting_on_76th_Birthday_of_Bhagwan_Sri_Sathya_Sai_Baba_-_23rd_Nov_2001/img4.jpg", link: "https://photos.app.goo.gl/OpuTxFOBv89qqIWB2" },
    { title: "Sri Sathya Sai Balvikas Worli - A Visit to Puttaparthi - 22nd to 29th Dec 1997", year: "1997", month: "December", image: "DownloadedPhotos/Sri_Sathya_Sai_Balvikas_Worli_-_A_Visit_to_Puttaparthi_-_22nd_to_29th_Dec_1997/img2.jpg", link: "https://photos.app.goo.gl/39oojGU4wRsNN2lO2" }
];


    function displayEvents(filteredEvents) {
        eventsContainer.innerHTML = ""; // Clear previous events

        // Pagination Logic
        const startIndex = (currentPage - 1) * eventsPerPage;
        const paginatedEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage);

        // Display events
        paginatedEvents.forEach(event => {
            const card = document.createElement("a");
            card.href = event.link;
            card.target = "_blank";
            card.classList.add("card");

            card.innerHTML = `
                <img src="${event.image}" alt="${event.title}">
                <h3>${event.title}</h3>
            `;

            eventsContainer.appendChild(card);
        });

        // Update Pagination UI
        updatePaginationUI(filteredEvents);
    }

    function updatePaginationUI(filteredEvents) {
        const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

        pageNumberDisplay.textContent = `Page ${currentPage} of ${totalPages}`;

        prevPageBtn.style.display = currentPage > 1 ? "block" : "none";
        nextPageBtn.style.display = currentPage < totalPages ? "block" : "none";
    }

    function changePage(direction) {
        const filteredEvents = getFilteredEvents();
        const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

        if ((direction === -1 && currentPage > 1) || (direction === 1 && currentPage < totalPages)) {
            currentPage += direction;
            displayEvents(filteredEvents);
        }
    }

    function getFilteredEvents() {
        return events.filter(event => {
            return (
                (yearFilter.value === "" || event.year === yearFilter.value) &&
                (monthFilter.value === "" || event.month === monthFilter.value) &&
                (searchInput.value === "" || event.title.toLowerCase().includes(searchInput.value.toLowerCase()))
            );
            
        });
    }

    function filterCards() {
        currentPage = 1; // Reset to first page when filtering
        displayEvents(getFilteredEvents());
    }

    function clearFilters() {
        yearFilter.value = "";
        monthFilter.value = "";
        searchInput.value = "";
        currentPage = 1; // Reset to first page
        displayEvents(events);
    }

	function vwToPx(vw){
		return (vw/100) * window.innerWidth;
	}
var heroShinker = function() {
    var hero = $('.hero-nav'),
        heroHeight = $('.hero-nav').outerHeight(true);
        $(hero).parent().css('padding-top', heroHeight);
	
	var heroTextH1=document.querySelector('.head1');
	
	//var st=window.getComputedStyle(heroTextH1).fontSize;
	
	var fsMin=vwToPx(2.5);
	var fsMax=vwToPx(5);
	//$(heroTextH1).css('font-size',fsMax);
    $(window).scroll(function() {
        var scrollOffset = $(window).scrollTop();
		
        if (scrollOffset < heroHeight) {
            $(hero).css('height', (heroHeight - scrollOffset));
        }
		
        if (scrollOffset > (heroHeight - 115)) {
            hero.addClass('fixme');
        } else {
            hero.removeClass('fixme');
        }; 
    });
}
heroShinker();
 
const h1 = document.querySelector('.head1');
const h2 = document.querySelector('.head2');
const logo1 = document.querySelector('.sarvadharma');
const logo2 = document.querySelector('.s100bday');
    const minFontSize = vwToPx(2.5); // in pixels
    const maxFontSize = vwToPx(8); // in pixels
    const maxScroll = 500;  // scroll threshold for font size to reach min/max
	
	const minFontSizeH2 = vwToPx(1.5); // in pixels
    const maxFontSizeH2 = vwToPx(3.5); // in pixels
    
	const minwidthLogo1 = vwToPx(5); // in pixels
    const maxwidthLogo1 = vwToPx(8); // in pixels
	
	const minwidthLogo2 = vwToPx(4.5); // in pixels
    const maxwidthLogo2 = vwToPx(8); // in pixels
	
    window.addEventListener('scroll', () => {
      var scrollY = window.scrollY;
      var ratio = Math.min(scrollY / maxScroll, 1); // Clamp between 0 and 1
      var newSize = maxFontSize - (maxFontSize - minFontSize) * ratio;
      h1.style.fontSize = `${newSize}px`;
	  
	  scrollY = window.scrollY;
      ratio = Math.min(scrollY / maxScroll, 1); // Clamp between 0 and 1
      newSize = maxFontSizeH2 - (maxFontSizeH2 - minFontSizeH2) * ratio;
      h2.style.fontSize = `${newSize}px`;
	  
	  scrollY = window.scrollY;
      ratio = Math.min(scrollY / maxScroll, 1); // Clamp between 0 and 1
      newSize = maxwidthLogo1 - (maxwidthLogo1 - minwidthLogo1) * ratio;
      logo1.style.width = `${newSize}px`; 
	  
	  scrollY = window.scrollY;
      ratio = Math.min(scrollY / maxScroll, 1); // Clamp between 0 and 1
      newSize = maxwidthLogo2 - (maxwidthLogo2 - minwidthLogo2) * ratio;
      logo2.style.width = `${newSize}px`;
	  
    });
    // Attach event listeners
    yearFilter.addEventListener("change", filterCards);
    monthFilter.addEventListener("change", filterCards);
    searchInput.addEventListener("input", filterCards);
    clearFiltersBtn.addEventListener("click", clearFilters);
    prevPageBtn.addEventListener("click", () => changePage(-1));
    nextPageBtn.addEventListener("click", () => changePage(1));

    // Initial Load
    displayEvents(events);
});
