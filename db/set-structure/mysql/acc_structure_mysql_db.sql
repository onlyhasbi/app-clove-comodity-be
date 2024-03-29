

create table buruh (
    id varchar(10) primary key,
    nama varchar(50) not null,
    sandi varchar(10) not null,
    tanggal_lahir date not null,
    jenis_kelamin ENUM('laki-laki','perempuan') not null,  
    alamat varchar(100) null
);


create table pxp (
    id varchar(10) primary key,
    jenis_pengguna ENUM('perorangan','UMKM/KLP.Tani','CV', 'PT') not null,
    sandi varchar(10) not null,
    nama varchar(50) not null,
    alamat varchar(100) null
);

create table auth (
    token varchar(50) primary key
);


/*tabel sistem profiling user buruh*/
create table kontak_buruh (
    id varchar(30) primary key,
    id_buruh varchar(30) not null,
    jenis_kontak ENUM('telpon', 'whatsapp', 'facebook', 'instagram', 'linkid', 'indeed', 'lainnya') not null,
    kontak varchar(30) not null,
    foreign key (id_buruh) references buruh(id)
);

create table lamaran_terbuka (
    id varchar(30) primary key,
    id_buruh varchar(30) not null,
    jenis_pekerjaan ENUM('buruh_panen','buruh_penjemuran') not null,
    upah_harapan integer not null,
    satuan_upah varchar(30) not null,
    foreign key (id_buruh) references buruh(id)
);

create table harapan_benefit_lamaran (
    id_pekerjaan varchar(30) primary key,
    item varchar(20) not null,
    catatan varchar(60) null,
    foreign key (id_pekerjaan) references lamaran_terbuka(id)
);


/*tabel sistem profiling user petani dan pedagang*/

create table kontak_pxp (
    id varchar(30) primary key,
    id_pxp varchar(30) not null,
    jenis_kontak ENUM('telpon', 'whatsapp', 'facebook', 'instagram', 'linkid', 'indeed', 'lainnya') not null,
    kontak varchar(30) not null,
    foreign key (id_pxp) references pxp(id)
);

create table lowongan_kerja (
    id varchar(30) primary key,
    id_pxp varchar(30) not null,
    jenis_pekerjaan ENUM('buruh_panen','buruh_penjemuran') not null,
    upah integer not null,
    indikator_upah  ENUM('berat/kg', 'volume/liter') not null,
    catatan varchar(30) null,
    foreign key (id_pxp) references pxp(id)
);

create table penawaran_komoditi (
    id varchar(30) primary key,
    id_pxp varchar(30) not null,
    jenis_penawaran ENUM('menjual', 'membeli') not null,
    max_nilai_ukur integer not null,
    min_nilai_ukur integer not null,
    indikator_ukur ENUM('berat/kg', 'volume/liter') not null,
    harga_rp integer not null,
    catatan varchar(30) null,
    foreign key (id_pxp) references pxp(id)
);

/*tabel relasi kerja buruh di pxp*/

create table status_kerja_buruh (
    id varchar(30) primary key,
    id_buruh varchar(30) not null,
    id_pxp varchar(30) not null,
    status_kerja  ENUM('melamar', 'undangan', 'bekerja', 'ditolak', 'menolak') not null,
    foreign key (id_pxp) references pxp(id),
    foreign key (id_buruh) references buruh(id)
);

/*tabel sistem pendataan proses panen*/

create table lahan (
    id varchar(30) primary key,
    id_pxp varchar(30) not null,
    lokasi varchar(60) not null,
    luas_m2 integer null,
    status_hak_panen ENUM('milik_sendiri','milik_tergadai','milik_dengan_pajak', 'bagi_hasil') null,
    foreign key (id_pxp) references pxp(id)
);

create table hasil_panen (
    id varchar(30) primary key,
    id_lahan varchar(30) not null,
    berat_kg integer not null,
    hasil_panen_harian date not null,
    catatan varchar(30) null,
    foreign key (id_lahan) references lahan(id)
);

create table setoran (
    id varchar(30) primary key,
    id_lahan varchar(30) not null,
    volume_liter integer not null,
    berat_kg integer null,
    upah_rp integer not null,
    setoran_panen_harian date not null,
    catatan varchar(30) null,
    foreign key (id_lahan) references lahan(id)
);

create table link_hasil_setoran (
    id_setoran varchar(30) primary key,
    id_hasil_p varchar(30) not null,
    foreign key (id_setoran) references setoran(id),
    foreign key (id_hasil_p) references hasil_panen(id)
);

create table link_setoran_buruh (
    id varchar(30) primary key,
    id_buruh varchar(30) not null,
    id_setoran varchar(30) not null,
    foreign key (id_buruh) references buruh(id),
    foreign key (id_setoran) references setoran(id)
);

/*tabel sistem pendataan proses pengeringan*/

create table bahan_pengeringan (
    id varchar(30) primary key,
    id_pxp varchar(30) not null,
    berat_kg integer not null,
    volume_liter integer null,
    dikeringkan_hari date not null,
    catatan varchar(30) null,
    foreign key (id_pxp) references pxp(id)
);

create table hasil_pengeringan (
    id varchar(30) primary key,
    id_pxp varchar(30) not null,
    berat_kg integer not null,
    volume_liter integer null,
    dikeringkan_hari date not null,
    catatan varchar(30) null,
    foreign key (id_pxp) references pxp(id)
);

create table link_pengeringan (
    id_bahan varchar(30) primary key,
    id_hasil varchar(30) not null,
    foreign key (id_bahan) references bahan_pengeringan(id),
    foreign key (id_hasil) references hasil_pengeringan(id)
);

create table link_hasil_pengeringan_buruh (
    id varchar(30) primary key,
    id_buruh varchar(30) not null,
    id_hasil_pengeringan varchar(30) not null,
    foreign key (id_buruh) references buruh(id),
    foreign key (id_hasil_pengeringan) references hasil_pengeringan(id)
);
/*tabel sistem pendataan proses jualbeli*/

create table jual_beli (
    id varchar(30) primary key,
    id_penjual varchar(30) not null,
    id_pembeli varchar(30) not null,
    jenis_komditas_cengkeh ENUM('kering', 'basah') not null,
    berat_kg integer not null,
    harga_rp integer not null,
    hari date not null,
    catatan varchar(30) null,
    foreign key (id_pembeli) references pxp(id),
    foreign key (id_penjual) references pxp(id)
);
