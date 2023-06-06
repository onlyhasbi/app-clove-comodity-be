
      CREATE TABLE buruh (
        id VARCHAR(30) PRIMARY KEY,
        nama VARCHAR(50) NOT NULL,
        tanggal_lahir DATE NOT NULL,
        jenis_kelamin CHAR(1) NOT NULL,
        alamat VARCHAR(100)
      );

      CREATE TABLE pxp (
        id VARCHAR(30) PRIMARY KEY,
        jenis_pengguna VARCHAR(20) NOT NULL,
        nama VARCHAR(50) NOT NULL,
        alamat VARCHAR(100)
      );

      CREATE TABLE bycrypt (
        id VARCHAR(30) PRIMARY KEY,
        
      );

      CREATE TABLE token (
        token VARCHAR(50) PRIMARY KEY
      );

      CREATE TABLE kontak_buruh (
        id VARCHAR(30) PRIMARY KEY,
        id_buruh VARCHAR(30) NOT NULL,
        jenis_kontak VARCHAR(20) NOT NULL,
        kontak VARCHAR(30) NOT NULL,
        FOREIGN KEY (id_buruh) REFERENCES buruh(id)
      );

      CREATE TABLE lamaran_terbuka (
        id VARCHAR(30) PRIMARY KEY,
        id_buruh VARCHAR(30) NOT NULL,
        jenis_pekerjaan VARCHAR(20) NOT NULL,
        upah_harapan INTEGER NOT NULL,
        satuan_upah VARCHAR(30) NOT NULL,
        FOREIGN KEY (id_buruh) REFERENCES buruh(id)
      );

      CREATE TABLE harapan_benefit_lamaran (
        id_pekerjaan VARCHAR(30) NOT NULL,
        item VARCHAR(20) NOT NULL,
        catatan VARCHAR(60),
        FOREIGN KEY (id_pekerjaan) REFERENCES lamaran_terbuka(id)
      );

    