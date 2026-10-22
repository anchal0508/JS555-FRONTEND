import type React from "react";

const Gallery: React.FC = () => {
  const altMsg = "Workshop Photos";
  const imageBaseUrl =
    "https://res.cloudinary.com/yj60kujr/image/upload/v1785256199/";

  const imageList: any[] = [
    "IMG_20180222_122114665_cw8gyk",
    "IMG-20200201-WA0021_nsb6ur",
    "IMG-20190920-WA0021_otjozs",
    "IMG-20180307-WA0015_dde0uc",
    "IMG-20180228-WA0011_xv25fo",
    "DSC_9074_kiug9o",
    "IMG-20180228-WA0040_nmv2ek",
    "FB_IMG_1526752395334_zfj0xj",
    "FB_IMG_1518189947054_qxtblg",
    "DSC_0134_vdlxha",
    "IMG-20220928-WA0033_ckv8uq",
    "IMG-20180228-WA0038_ds0fav",
    "IMG-20170919-WA0041_yxnfgc",
    "_ECN7998_atuvep",
    "IMG_20200306_155515_rkawbs",
    "IMG-20191113-WA0010_umlier",
    "IMG-20191112-WA0017_giomcj",
    "IMG-20191002-WA0018_saixat",
    "IMG-20190410-WA0007_yjyri5",
    "IMG-20181001-WA0051_pzrbto",
    "IMG-20180307-WA0018_htbtqs",
    "IMG-20170919-WA0026_klk7tp",
    "DSC_0125_grrxfa",
    "IMG-20200225-WA0011_vanafp",
    "IMG-20190310-WA0051_mycuee",
    "IMG-20190410-WA0000_ckjyl1",
    "IMG-20170919-WA0022_pc6yuk",
    "IMG-20190310-WA0052_x0wjme",
    "IMG-20190310-WA0009_si6abb",
    "IMG-20171011-WA0026_nkicfc",
    "IMG-20171011-WA0022_gt3fbo",
    "IMG-20170919-WA0040_bfk25x",
    "FB_IMG_1527272938508_hi2pjn",
    "IMG-20191115-WA0012_yjvkl9",
    "IMG-20190927-WA0006_nzyvbd",
    "IMG-20190921-WA0012_nyc76a",
    "IMG-20180228-WA0009_b7jjcy",
    "FB_IMG_1527272934862_axysk7",
    "IMG_20180202_182151214_a3vrmd",
    "IMG-20220928-WA0031_etax6z",
    "IMG-20191114-WA0029_xkmdab",
    "IMG-20190921-WA0019_ypzxck",
    "IMG-20180125-WA0003_ds9zs0",
    "IMG-20170919-WA0018_khp3c6",
    "FB_IMG_1527272931665_dfxcc5",
    "49e9e75857dd442a8aa1d824c943df69_ikxipv",
    "IMG-20220928-WA0012_ztp54i",
    "IMG-20200201-WA0004_utwcsg",
    "IMG-20191113-WA0009_kugip4",
    "IMG-20190410-WA0001_dqalu3",
    "IMG-20190307-WA0023_d8pcmd",
    "IMG-20180318-WA0001_lafubk",
    "IMG-20180305-WA0010_wyufjv",
    "IMG-20180125-WA0007_gnahwb",
    "IMG-20171013-WA0009_j9tjf3",
    "IMG-20171004-WA0006_f8xzph",
    "FB_IMG_1526752400604_zlunoz",
    "_ECN7998_atuvep",
    "IMG_20200306_155515_rkawbs",
    "IMG-20220928-WA0027_wxropb",
    "IMG-20191113-WA0010_umlier",
    "IMG-20191112-WA0017_giomcj",
    "IMG-20191002-WA0018_saixat",
    "IMG-20190410-WA0007_yjyri5",
    "IMG-20181001-WA0051_pzrbto",
    "IMG-20180307-WA0018_htbtqs",
    "IMG-20170919-WA0026_klk7tp",
    "DSC_0125_grrxfa",
    "_ECN8004_an2tyx",
    "IMG-20200225-WA0011_vanafp",
    "IMG-20190310-WA0051_mycuee",
    "DSC_0134_vdlxha",
    "IMG-20220928-WA0033_ckv8uq",
    "IMG-20180228-WA0038_ds0fav",
    "IMG-20170919-WA0041_yxnfgc",
    "FB_IMG_1527272918374_pnnehc",
    "Copy of IMG-20190814-WA0000_m3l0tf",
    "IMG-20200122-WA0002_q33isw",
    "IMG-20200121-WA0019_akoi0o",
    "IMG-20191002-WA0022_ikqgbe",
    "IMG-20190310-WA0004_x0ui6e",
    "IMG-20171011-WA0017_gcst9j",
    "IMG-20171011-WA0013_m9uvy8",
    "DSC_0146_ighx9r",
    "DSC_0145_wk56da",
    "IMG-20220928-WA0035_vdehee",
  ];
  return (
    <div className="max-w-300">
      <h2 className="text-center pt-4 pb-4 mt-2 mb-2 rounded-lg text-3xl bg-slate-600/60 font-semibold text-cyan-400">
        Image Gallery
      </h2>
      <div
        className="
      grid grid-cols-2 gap-2 
      sm:grid-cols-3 sm:gap-3
      md:grid-cols-4 md:gap-4
      "
      >
        {imageList.map((imgData, index) => (
          <div key={index} className="">
            <img
              src={imageBaseUrl + imgData}
              alt={altMsg}
              className={`rounded-2xl  bg-amber-700/40`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
