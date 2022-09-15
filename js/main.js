window.addEventListener("load", () => {
  // 获取事件
  const navBars = document.querySelector(".nav-bars");
  const avator = document.querySelector(".avator");
  const avatorIntro = document.querySelector(".avator-intro");
  const intro = document.querySelector(".intro");
  const wechat = document.querySelector(".wechat");
  const bgCard = document.querySelector(".black-background");
  const btnCancel = document.querySelector(".scan-close");
  const next = document.querySelector(".next");
  const header = document.querySelector("header");
  const side = document.querySelector(".side-options").children[0];
  const retTop = document.querySelector(".icon-fasong").parentNode;
  const message = document.querySelector(".side-message");
  const messageBox = document.querySelector(".message");
  const messageBoxClose = document.querySelector(".message-box-close");
  const sideSetting = document.querySelector(".icon-shezhi").parentNode;
  const sideSettingIcon = document.querySelector(".icon-shezhi");
  const dayNight = document.querySelector(".day-night");
  const dayNightIcon = document.querySelector(".icon-yejianmoshi");
  const nightBgc = document.querySelector(".background-night");
  const mainNavBars = document.querySelector(".main-nav-bars");
  const addAlbums = document.querySelector(".album-box");
  const albums = document.querySelector(".album");
  const addPoints = document.querySelector(".points");
  const point = addPoints.children;
  const leftChange = document.querySelector(".left-change");
  const rightChange = document.querySelector(".right-change");
  const dayNightTitle = document.querySelector(".day-night-title");

  // nav bar 加载动画事件
  navBars.style.transform = "translateX(0)";

  // 页面加载完成，头像由正中间sayhi
  let rotateCon = 0;
  avatorIntro.style.transform = "translateX(-150%)";
  let rTimer = setInterval(() => {
    if (rotateCon < 720) {
      avator.style.transform = `rotate(${-(rotateCon += 18)}deg)`;
    } else {
      clearInterval(rTimer);
    }
  }, 15);

  setTimeout(() => {
    intro.style.display = "block";
    setTimeout(() => {
      setInterval(() => {
        avator.style.transform = "";

        intro.style.display = "none";
        avatorIntro.style.transform = "translateX(0)";
      }, 1500);
    }, 1500);
  }, 1500);

  // 点击黑色的微信图标可以弹出扫一扫
  wechat.addEventListener("click", function () {
    bgCard.style.display = "flex";
  });

  // 关闭扫一扫界面
  btnCancel.addEventListener("click", () => {
    bgCard.style.display = "none";
  });

  // 首页底下的小箭头动画效果函数
  setInterval(function () {
    next.classList.toggle("translate");
  }, 1000);

  // 下拉动画
  next.addEventListener("click", function () {
    let htmlHeight = 0;

    htmlHeight = header.offsetHeight;
    let run = document.documentElement.scrollTop;
    setInterval(() => {
      if (run < htmlHeight) {
        run += 35;
        document.documentElement.scrollTop = run;
      }
    }, 1);
  });

  // 下拉右侧多选出来
  setInterval(() => {
    if (document.documentElement.scrollTop > 1) {
      side.style.transform = `translateX(0)`;
    } else {
      side.style.transform = `translateX(100%)`;
    }
  }, 10);

  // 小飞机返回顶部
  retTop.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });

  // 侧边讯息按钮弹出事件
  let open = true;
  message.addEventListener("click", function () {
    if (open) {
      setTimeout(() => {
        open = false;
        messageBox.style.display = "flex";
        setTimeout(() => {
          messageBox.style.height = "59.5rem";
          messageBox.style.width = "38rem";
        }, 10);
        message.children[0].style.color = "#f8f9fa";
      }, 250);
    } else {
      setTimeout(() => {
        open = true;
        messageBox.style.height = "0";
        messageBox.style.width = "0";
        setTimeout(() => {
          messageBox.style.display = "none";
        }, 100);
        message.children[0].style.color = "#023047";
        setTimeout(() => {
          message.children[0].style.color = "";
        }, 500);
      }, 250);
    }
  });

  // 关闭讯息框弹出事件
  messageBoxClose.addEventListener("click", function () {
    messageBox.style.height = "0";
    messageBox.style.width = "0";
    setTimeout(() => {
      messageBox.style.display = "none";
    }, 100);
    message.children[0].style.color = "#023047";
    open = true;
  });

  // 侧边栏设置选项点击事件
  let flag = 1;
  sideSetting.addEventListener("click", function () {
    if (flag) {
      dayNight.style.transform = `translateX(0)`;
      sideSettingIcon.style.color = "#f8f9fa";
      flag = 0;
    } else {
      dayNight.style.transform = `translateX(100%)`;
      sideSettingIcon.style.color = "#023047";
      setTimeout(() => {
        sideSettingIcon.style.color = "";
      }, 500);
      flag = 1;
    }
  });

  // 获取当前时间，如若白天则日间模式，反之夜间模式
  let num = 0;
  let date = new Date();
  let nowHour = date.getHours();
  if (nowHour > 6 && nowHour < 19) {
    num = 1;

    dayNightIcon.style.color = "#023047";
    nightBgc.style.display = "none";
    document.body.style.backgroundColor = "#8ecae678";
  } else {
    dayNightIcon.style.color = "#f8f9fa";
    nightBgc.style.display = "block";
    document.body.style.backgroundColor = "#202124";
    num = 0;
  }

  // 侧边栏夜间模式点击事件
  dayNight.addEventListener("click", function () {
    console.log(num);
    if (num) {
      setTimeout(() => {
        dayNightIcon.style.color = "#f8f9fa";
        nightBgc.style.display = "block";
        num = 0;
        document.body.style.backgroundColor = "#202124";
        dayNightTitle.style.transform = "translateY(0)";
        dayNightTitle.style.color = "#f8f9fa";
        dayNightTitle.innerHTML = "已切换夜间模式";
        setTimeout(() => {
          dayNightTitle.style.transform = "";
        }, 1200);
      }, 1200);
    } else {
      setTimeout(() => {
        dayNightIcon.style.color = "#023047";
        nightBgc.style.display = "none";
        num = 1;
        document.body.style.backgroundColor = "#8ecae678";
        dayNightTitle.style.transform = "translateY(0)";
        dayNightTitle.style.color = "#023047";
        dayNightTitle.innerHTML = "已切换日间模式";

        setTimeout(() => {
          dayNightTitle.style.transform = "";
          dayNightTitle.style.color = "#023047";
        }, 1200);
      }, 1200);
    }
  });

  //main nav框动画
  setInterval(() => {
    if (document.documentElement.scrollTop >= 100) {
      mainNavBars.style.transform = "translateX(0)";
    } else {
      mainNavBars.style.transform = "translateX(-1000%)";
    }
  }, 10);

  // 添加任意数量的照片函数
  function addpic(num) {
    for (let i = 0; i < num + 1; i++) {
      let picsbox = document.createElement("li");
      addAlbums.append(picsbox);
      addAlbums.style.width = `${100 * (num + 1)}%`;

      addAlbums.children[i].style.width = `${100 / (num + 1)}%`;
    }

    for (let i = 0; i < num; i++) {
      let point = document.createElement("span");
      addPoints.append(point);
    }
    addPoints.children[0].classList.add("p-change");
  }

  // 添加4张照片
  addpic(4);

  // 鼠标放上相册，显示两个选择箭头事件
  albums.addEventListener("mouseenter", function () {
    setTimeout(() => {
      leftChange.style.display = "flex";
      rightChange.style.display = "flex";
    }, 150);
  });

  // 鼠标离开箭头消失
  albums.addEventListener("mouseleave", function () {
    setTimeout(() => {
      leftChange.style.display = "none";
      rightChange.style.display = "none";
    }, 150);
  });

  let index = 0;

  // 小点的变化事件
  let count = 100 / (point.length + 1);
  for (let i = 0; i < point.length; i++) {
    // 给每个点加上编号index,从0开始到3结束
    point[i].setAttribute("index", i);
    point[i].addEventListener("click", function () {
      // 每按一个点,index相应变化
      index = point[i].getAttribute("index");
      // 全清样式
      for (let i = 0; i < point.length; i++) {
        point[i].classList.remove("p-change");
      }

      point[i].classList.add("p-change");
      addAlbums.style.transform = `translateX(${-index * count}%)`;
      // bCounter = index;
    });
  }

  // 左右箭头的变化事件之右箭头
  rightChange.addEventListener("click", function () {
    if (index < point.length) {
      addAlbums.style.transition = "all 0.3s";
      index++;
      addAlbums.style.transform = `translateX(${-count * index}%)`;
    } else {
      addAlbums.style.transition = "none";
      index = 0;
      addAlbums.style.transform = `translateX(${-count * index}%)`;
      setTimeout(() => {
        rightChange.click();
      }, 3);
    }

    // 右箭头点击,小点跟着一起动
    for (let i = 0; i < point.length; i++) {
      point[i].classList.remove("p-change");
    }
    if (index < point.length) {
      point[index].classList.add("p-change");
    } else {
      point[0].classList.add("p-change");
    }
  });

  // 左右箭头的变化事件之左箭头
  leftChange.addEventListener("click", function () {
    if (index > 0) {
      addAlbums.style.transition = "all 0.3s";
      index--;
      addAlbums.style.transform = `translateX(${count * -index}%)`;
    } else {
      addAlbums.style.transition = "none";

      index = point.length;
      addAlbums.style.transform = `translateX(${count * -index}%)`;
      setTimeout(() => {
        leftChange.click();
      }, 3);
    }

    for (let i = 0; i < point.length; i++) {
      point[i].classList.remove("p-change");
    }
    if (index < point.length) {
      point[index].classList.add("p-change");
    } else {
      point[0].classList.add("p-change");
    }
  });

  // 轮播图循环播放
  let timer = setInterval(() => {
    rightChange.click();
  }, 3000);

  // 鼠标放图上停止循环播放
  addAlbums.addEventListener("mouseenter", function () {
    clearInterval(timer);
  });

  // 鼠标移出照片继续播放
  addAlbums.addEventListener("mouseleave", function () {
    timer = setInterval(() => {
      rightChange.click();
    }, 3000);
  });
});
