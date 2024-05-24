let _silder = document.getElementById('silder')
let _img = document.querySelectorAll('main img')
let btnLeft = document.getElementById('btnLeft')
let btnRight = document.getElementById('btnRight')
let bullet = document.getElementById('bullet')
let flag = 0
let _status = ''
let _point
let _liCircle
//onload
myFunc()

//width of _slider
_silder.style.width = (_img.length) * 500 + 'px'


//creat li
_img.forEach(val => {
    _point = document.createElement('li')
    bullet.appendChild(_point)
    _point.classList.add('_li')
    _liCircle = document.querySelectorAll('._li')
})


//li  style
_liCircle.forEach((val, index) => {
    val.addEventListener('click', () => {
        //stlying li
        // li reset    
            _liCircle.forEach(element => {
                element.style.background = 'grey'
            })
       
        val.style.background = 'black'

        _img.forEach((item, i) => {
            if (i == index) {
                _silder.style.transform = `translateX(${i*-500}px)`
                flag = i*-500            
            }
            myFunc()
            return
        })
    })
})


//right btn
btnRight.addEventListener('click', () => {
    flag = flag - 500
    _silder.style.transform = `translateX(${flag}px)`
    myFunc()    
    //li setting
    _liCircle.forEach((element, index) => {
        if (-flag / 500 == index) {
            element.style.background = 'black'

        } else {
            element.style.background = 'grey'
        }
    })

})

//right btn
btnLeft.addEventListener('click', () => {
    flag = flag + 500    
    _silder.style.transform = `translateX(${flag}px)`
    myFunc()

    //li setting
    _liCircle.forEach((element, index) => {
        if (-flag / 500 == index) {
            element.style.background = 'black'
        } else {
            element.style.background = 'grey'
        }
    })
})




//arrow setting
function myFunc() {
    if (flag == -2000) {
        btnRight.style.right = -5000 + '%'
    } else {
        btnRight.style.right = 5 + '%'
    }
    if (flag == 0) {
        btnLeft.style.left = -5000 + '%'
    } else {
        btnLeft.style.left = 5 + '%'
    }
}