// 位置情報
//****************************************
    //成功関数
    //****************************************

    function mapsInit(position) {
      let map;
      console.log(position, "取得")
      //lat=緯度、lon=経度 を取得
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const timestamp = position.timestamp;
      localStorage.setItem("time", timestamp)
    };

    //****************************************
    //失敗関数
    //****************************************
    function mapsError(error) {
      let e = "";
      if (error.code == 1) { //1＝位置情報取得が許可されてない（ブラウザの設定）
        e = "位置情報が許可されてません";
      }
      if (error.code == 2) { //2＝現在地を特定できない
        e = "現在位置を特定できません";
      }
      if (error.code == 3) { //3＝位置情報を取得する前にタイムアウトになった場合
        e = "位置情報を取得する前にタイムアウトになりました";
      }
      alert("エラー：" + e);
    };

    //****************************************
    //オプション設定
    //****************************************
    const set = {
      enableHighAccuracy: true, //より高精度な位置を求める
      maximumAge: 20000, //最後の現在地情報取得が20秒以内であればその情報を再利用する設定
      timeout: 10000 //10秒以内に現在地情報を取得できなければ、処理を終了
    };


    //最初に実行する関数
    function GetMap() {
      navigator.geolocation.getCurrentPosition(mapsInit, mapsError, set);
    };

    
    // クリックしたらローカルストレージから緯度経度を読み込んでMAP表示→登録
    window.addEventListener('DOMContentLoaded', function(){
      $('#geo').on('click', function () {
        const lat = localStorage.getItem("centerLatitude");
        const lon = localStorage.getItem("centerLongitude");

        //Map表示
        map = new Bmap("#myMap");
        map.startMap(lat, lon, "load", 20); //The place is Bellevue.
        //Pinを追加
        let pin = map.pin(lat, lon, "#ff0000");
        //Infoboxを追加
        // map.infobox(lat, lon, "お気に入りです", "紅葉がきれいです");
      });
    });