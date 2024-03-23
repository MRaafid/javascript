function age(a)
    {
        let today = new Date()
        let x = today.getTime()
        let dob =  new Date(a)
        let y = dob.getTime()
        let z = x -y;
        let s = z/1000
        let ms = s - Math.floor(s)
        // milisecond
        let milisecond = ms.toFixed(3) *1000                   
        milisecond = String(milisecond).padStart(3, "0");
        let se = s - ms
        let sec = se/60
        let secn = sec - Math.floor(sec)
        let secd = secn* 60
        // second
        let second = secd.toFixed(0)
        second = String(second).padStart(2, "0");
        let m = sec - secn
        mn = m/60
        let min = mn - Math.floor(mn)
        let mint = min* 60
        // minutes
        let minutes = mint.toFixed(0)
        minutes = String(minutes).padStart(2, "0");
        let h = mn - min
        let hr = h/24
        let hrs = hr - Math.floor(hr)
        let hurs = hrs*24
        // hour
        let hour = hurs.toFixed(0)
        hour = String(hour).padStart(2, "0");
        //day
        let d = hr - hrs
        console.log(`YOU ARE NOW ${d} DAYS, ${hour} HOURS, ${minutes} MINUTES, ${second} SECONDS AND ${milisecond} MILISECOND OLD`)
    }
age('1998-05-29T03:30:00.000')







