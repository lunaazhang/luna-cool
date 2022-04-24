
$(function () {

  function renderFace() {
    const str = '😄😆😊😃😏😍😘😚😳😌😆😁😉😜😝😀😗😙😛😴😟😦😧😮😬😕😯😑😒😅😓😥😩😔😞😖😨😰😣😢😭😂😲😱😫😠😡😤😪😋😷😎😵👿😈😐😶😇👽💛💙💜💚💔💓💗💕💞💘💖✨🌟💫💥💤💨💦🎶🎵🔥💩👍👎👌👊✊👋✋👐👇👈👉🙌🙏👆👏💪🤘🖕🏃👫👪👬💃👯🙆🙅💁🙋👰🙎🙍🙇💑💆💇💅👦👧👩👨👶👵👴👱👲👳👷👮👼👸😺😸😻😽😼🙀😿😹😾👹👺🙈🙉🙊💂💀🐾👄💋💧👂👀👃👅💌👤👥💬💭'
    const str1 = '🌀🌁🌊🐱🐶🐭🐹🐰🐺🐸🐯🐨🐻🐷🐽🐮🐗🐵🐒🐴🐎🐫🐑🐘🐼🐍🐦🐤🐥🐣🐔🐧🐢🐛🐝🐜🐞🐌🐙🐠🐟🐳🐋🐬🐄🐏🐀🐃🐅🐇🐉🐐🐓🐕🐖🐁🐂🐲🐡🐊🐪🐆🐈🐩🐾💐🌸🌷🍀🌹🌻🌺🍁🍃🍂🌿🍄🌵🌴🌲🌳🌰🌱🌼🌾🐚🌐🌞🌝🌚🌑🌒🌓🌔🌕🌖🌗🌘🌜🌛🌙🌍🌎🌏🌋'
    const str2 = '🏢🏣🏥🏦🏪🏩🏨💒🏬🏤🌇🌆🏯🏰🏭🗼🌄🌅🌠🗽🌉🎠🌈🚀🚁🚂🚊🚞🚡🚟🚠🚜🚙🚘🚗🚗🚕🚖🚛🚌🚍🚨🚓🚔🚒🚑🚐🚚🚋🚉🚆🚅🚄🚈🚝🚃🚎🎫🚦🚥🚧🔰🏧🎰🚏💈🏁🎌🏮🗿🎪🎭📍🚩'
    const list = Array.from(str)
    const list1 = Array.from(str1)
    const list2 = Array.from(str2)
    let htmlStr = ''
    const allList = [...list, ...list1, ...list2]
    allList.forEach((e) => {
      console.log(e == '');
      if (e != '') {
        htmlStr += `<div class="item">${e}</div>`
      }
    })
    $('body').find('#faceListId').html(htmlStr)
    $('#maxBoxId').css({ width: 700 + 'px', height: 700 + 'px' })
  }
  // 关闭弹层
  $('body').on('click', '#closeModalId-1, #closeModalBtnId-1', function () {
    $('#maxBoxId').css({ width: 400 + 'px', height: 200 + 'px' })
    $('#modalSetId-1').fadeOut()

  })
  // 显示表情包弹层
  $('body').on('click', '#faceModelId', function () {
    $('#modalSetId-1').fadeIn()
    renderFace()
  })
  // 复制
  $('body').on('click','#faceListId .item',function(){
    const text = $(this).text();
    navigator.clipboard.writeText(text);
    $('#msgfaceId').text(`${text} -> 复制成功 <- ${text}`)
    $('#msgfaceId').fadeIn()
    setTimeout(() => {
      $('#msgfaceId').fadeOut()
    }, 1000);
  })
})

