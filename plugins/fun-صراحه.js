let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*╮─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*

*『 ${pickRandom(global.truth)} 』*

*╯─━━⊱𝙻𝚄𝙵𝙵𝚈┇🤖┇𝙱𝙾𝚃⊰━*`, m)
}
handler.help = ['bzmzjdks']
handler.tags = ['fun']
handler.command = /صراحه|صراحة/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

 global.truth = [ 
'ما أسوأ شيء فعلته في الحياة؟',
'ما آخر قرار أخذته وندمت عليه؟',
'ما أكثر شيء تكرهه في نفسك؟',
'هل ظلمت أحد من قبل؟ كيف؟',
'كيف ولماذا تركك الحبيب؟',
'هل أحببت من طرف واحد من قبل؟',
'هل غدر بك أعز صديق لك؟ كيف؟',
'إذا خيرتِ بين الزواج والعمل أي منهما ستختارين؟',
'هل يمكنكِ الخروج دون وضع مكياج؟',
'ما هو الشيء الذي يمثل لك خط أحمر؟',
'ما هي الأفكار الجنونية التي تراودك؟',
'من أول حب في حياتك؟ وما هي نهاية هذه القصة؟',
'من أقرب شخص لك في هذه الغرفة؟',
'هل من الممكن أن تعرضي على شخص تحبينه الزواج؟',
'هل من الممكن أن توافقي على السفر إلى الخارج مع الزوج للعيش بشكل نهائي؟',
'كم عدد تجاربك العاطفية؟',
'هل يتواجد شخصًا تحبه في هذه الغرفة؟',
'أوصف حياتك في كلمة؟',
'هل لا تستطيع النوم بسبب شخص أو ذكريات؟',
'هل حاولت الانتحار من قبل؟ لماذا؟',
'ما الشيء الذي تخاف منه؟',
'هل يتواجد شخص تود أن تراه يبكي أمامك؟ من؟',
'هل ظللت سنوات تحب شخص تركك؟',
'ما أقوى صدمة عاطفية أثرت فيك؟',
'هل هُناك موقف كلما تذكرته تبكي بشدة؟',
'هل ساعدت أحد من قبل، وبعد ذلك شعرت بالندم لأنه لا يستحق؟',
'حددي لنا درجة حبك لنفسك من 1 إلى 10؟',
'من أول شخص يخطر على بالك عند الوقوع في مشكلة أو ضيق؟',
'أوصف نفسك في كلمة؟',
'هل من الممكن أن تقبلين أن تكونين زوجة ثانية؟',
'إذا جاءت لك فرصة للهجرة دون رجعة هل ستفعل هذا؟ لماذا؟',
'ماذا ستفعلين إذا منعتِ من وضع المكياج طوال حياتكِ؟',
'هل شعرت أن قلبك يؤلمك حقًا بسبب أحدهم؟',
'إذا لم يكن هُناك قانون أو حلال وحرام، ما الأشياء التي سترغب في فعلها؟',
'ما الموقف الذي شعرت أنك لن تتجاوزه بسهولة؟',
'ما السبب في بكائك آخر مرة؟',
'من وجهة نظرك لماذا يحب الإنسان من باعه، ويتمسك به بشدة؟',
'هل أنت راض عن نفسك؟ لماذا؟',
'إذا كانت هُناك إمكانية للرجوع إلى الماضي وتغيير شيء ما، ماذا سيكون؟',

 ] 