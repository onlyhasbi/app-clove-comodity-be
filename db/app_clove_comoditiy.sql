create database acc;

/*tabel sistem user*/


create table `acc`.`buruh` (
    `id` varchar(30) not null,
    `nama` varchar(50) not null,
    `tanggal lahir` date not null,
    `jenis_kelamin` set('L','P') not null,  
    `alamat` varchar(100) null,
    primary key (`id`(30))
)ENGINE = InnoDB;


create table `acc`.`pxp` (
    `id` varchar(30) not null,
    `jenis_pengguna` set('PERORANGAN','UMKM/KEL.TANI','CV', 'PT') not null,  
    `nama` varchar(50) not null,
    `alamat_kantor/sekerretariat` varchar(100) null,
    primary key (`id`(30))
)ENGINE = InnoDB;

create table `acc`.`token` (
    `token` varchar(50) not null,
    primary key ( `token`(50))
)ENGINE = InnoDB;


/*tabel sistem profiling user buruh*/
create table `acc`.`kontak_buruh` (
    `id` varchar(30) not null,
    `id_buruh` varchar(30) not null,
    `jenis_kontak` set('telpon', 'whatsapp', 'facebook', 'instagram', 'linkid', 'indeed', 'lainnya') not null,
    `kontak` varchar(30) not null,
    primary key (`id`(30)),
    foreign key (`id_buruh`) references `buruh`(`id`)
)ENGINE = InnoDB;

create table `acc`.`lamaran_terbuka` (
    `id` varchar(30) not null,
    `id_buruh` varchar(30) not null,
    `jenis_pekerjaan` set('buruh panen','buruh penjemuran') not null,
    `upah_harapan` int(20) not null,
    `satuan_upah` varchar(30) not null,
    primary key (`id`(30)),
    foreign key (`id_buruh`) references `buruh`(`id`)
)ENGINE = InnoDB;

create table `acc`.`harapan_benefit_lamaran` (
    `id_pekerjaan` varchar(30) not null,
    `item` varchar(20) not null,
    `catatan` varchar(60) null,
    foreign key (`id_pekerjaan`) references `lamaran_terbuka`(`id`)
)ENGINE = InnoDB;


/*tabel sistem profiling user petani dan pedagang*/

create table `acc`.`kontak_pxp` (
    `id` varchar(30) not null,
    `id_pxp` varchar(30) not null,
    `jenis_kontak` set('telpon', 'whatsapp', 'facebook', 'instagram', 'linkid', 'indeed', 'lainnya') not null,
    `kontak` varchar(30) not null,
    primary key (`id`(30)),
    foreign key (`id_pxp`) references `pxp`(`id`)
)ENGINE = InnoDB;

create table `acc`.`lowongan_kerja` (
    `id` varchar(30) not null,
    `id_pxp` varchar(30) not null,
    `jenis_pekerjaan` set('buruh panen','buruh penjemuran') not null,
    `upah` int(20) not null,
    `satuan_upah` varchar(30) not null,
    `catatan` varchar(30) null,
    primary key (`id`(30)),
    foreign key (`id_pxp`) references `pxp`(`id`)
)ENGINE = InnoDB;

create table `acc`.`penawaran_komoditi` (
    `id` varchar(30) not null,
    `id_pxp` varchar(30) not null,
    `nilai ukur` int(20) not null,
    `satuan_ukur` char(20) not null,
    `harga` int(20) not null,
    `satuan_harga` char(20) not null,
    `catatan` varchar(30) null,
    primary key (`id`(30)),
    foreign key (`id_pxp`) references `pxp`(`id`)
)ENGINE = InnoDB;

create table `acc`.`permintaan_komoditi` (
    `id` varchar(30) not null,
    `id_pxp` varchar(30) not null,
    `nilai ukur` int(20) not null,
    `satuan_ukur` char(20) not null,
    `harga` int(20) not null,
    `satuan_harga` char(20) not null,
    `catatan` varchar(30) null,
    primary key (`id`(30)),
    foreign key (`id_pxp`) references `pxp`(`id`)
)ENGINE = InnoDB;


/*tabel relasi kerja buruh di pxp*/

create table `acc`.`status_kerja_buruh` (
    `id` varchar(30) not null,
    `id_buruh` varchar(30) not null,
    `id_pxp` varchar(30) not null,
    `status`  set('melamar', 'undangan', 'bekerja', 'ditolak', 'menolak') not null,
    primary key (`id`(30)),
    foreign key (`id_pxp`) references `pxp`(`id`),
    foreign key (`id_buruh`) references `buruh`(`id`)
)ENGINE = InnoDB;

/*tabel sistem pendataan proses panen*/

create table `acc`.`lahan` (
    `id` varchar(30) not null,
    `id_pxp` varchar(30) not null,
    `lokasi/tempat` varchar(60) not null,
    `luas dalam  m2` int(10) null,
    `status_hak_panen` set('milik sendiri','milik_tergadai','milik_dengan_pajak', 'bagi hasil') null,
    primary key (`id`(30)),
    foreign key (`id_pxp`) references `pxp`(`id`)
)ENGINE = InnoDB;

create table `acc`.`hasil_panen` (
    `id` varchar(30) not null,
    `id_lahan` varchar(30) not null,
    `berat_dalam_kilogram` int(20) not null,
    `hasil_panen_hari` date not null,
    `catatan` varchar(30) null,
    primary key (`id`(30)),
    foreign key (`id_lahan`) references `lahan`(`id`)
)ENGINE = InnoDB;

create table `acc`.`setoran` (
    `id` varchar(30) not null,
    `id_lahan` varchar(30) not null,
    `volume_dalam_liter` int(20) not null,
    `massa_dalam_kilogram` int(20) null,
    `upah_dalam_rupiah` int(20) not null,
    `setoran_panen_hari` date not null,
    `catatan` varchar(30) null,
    primary key (`id`(30)),
    foreign key (`id_lahan`) references `lahan`(`id`)
)ENGINE = InnoDB;

create table `acc`.`link_hasil_setoran` (
    `id_setoran` varchar(30) not null,
    `id_hasil_p` varchar(30) not null,
    primary key (`id_setoran`(30)),
    foreign key ( `id_setoran`) references `setoran`(`id`),
    foreign key (`id_hasil_p`) references `hasil_panen`(`id`)
)ENGINE = InnoDB;
create table `acc`.`link_setoran_buruh` (
    `id` varchar(30) not null,
    `id_buruh` varchar(30) not null,
    `id_setoran` varchar(30) not null,
    primary key (`id`(30)),
    foreign key (`id_buruh`) references `buruh`(`id`),
    foreign key ( `id_setoran`) references `setoran`(`id`)
)ENGINE = InnoDB;

/*tabel sistem pendataan proses pengeringan*/

create table `acc`.`bahan_pengeringan` (
    `id` varchar(30) not null,
    `id_pxp` varchar(30) not null,
    `berat_dalam_kilogram` int(20) not null,
    `volume_dalam_liter` int(20) null,
    `dikeringkan_hari` date not null,
    `catatan` varchar(30) null,
    primary key (`id`(30)),
    foreign key (`id_pxp`) references `pxp`(`id`)
)ENGINE = InnoDB;

create table `acc`.`hasil_pengeringan` (
    `id` varchar(30) not null,
    `id_pxp` varchar(30) not null,
    `berat_dalam_kilogram` int(20) not null,
    `volume_dalam_liter` int(20) null,
    `dikeringkan_hari` date not null,
    `catatan` varchar(30) null,
    primary key (`id`(30)),
    foreign key (`id_pxp`) references `pxp`(`id`)
)ENGINE = InnoDB;

create table `acc`.`link_pengeringan` (
    `id_bahan` varchar(30) not null,
    `id_hasil` varchar(30) not null,
    primary key (`id_bahan`(30)),
    foreign key (`id_bahan`) references `bahan_pengeringan`(`id`),
    foreign key (`id_hasil`) references `hasil_pengeringan`(`id`)
)ENGINE = InnoDB;

create table `acc`.`link_hasil_pengeringan_buruh` (
    `id` varchar(30) not null,
    `id_buruh` varchar(30) not null,
    `id_hasil_pengeringan` varchar(30) not null,
    primary key (`id`(30)),
    foreign key (`id_buruh`) references `buruh`(`id`),
    foreign key (`id_hasil_pengeringan`) references `hasil_pengeringan`(`id`)
)ENGINE = InnoDB;
/*tabel sistem pendataan proses jualbeli*/

create table `acc`.`jual_beli` (
    `id` varchar(30) not null,
    `id_penjual` varchar(30) not null,
    `id_pembeli` varchar(30) not null,
    `jenis_komditas_cengkeh` set('basah','kering') not null,
    `berat_dalam_kilogram` int(20) not null,
    `harga_dalam_rupiah` int(20) not null,
    `hari` date not null,
    `catatan` varchar(30) null,
    primary key (`id`(30)),
    foreign key (`id_pembeli`) references `pxp`(`id`),
    foreign key (`id_penjual`) references `pxp`(`id`)
)ENGINE = InnoDB;

