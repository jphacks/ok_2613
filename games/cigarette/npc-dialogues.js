/** Authored fiction. Strangers meet in a smoking area at night. */
export const CHARACTERS = [
 {id:'haru',name:'ハル',alias:'ネクタイを緩めた人',appearance:'suit',nodes:{
  hello:{lead:'自販機の低い音。ネクタイを緩めた人が、灰皿から少し離れて立っている。',text:'……まだ、帰らないんですか。',choices:[['もう少しだけ、ここに。','stay'],['そちらこそ。','return'],['軽く会釈する。','nod']]},
  stay:{text:'僕もです。帰れない理由は、ないんですけど。',choices:[['帰りたくない理由なら、ある？','reason'],['ここ、時間が止まった感じがしますね。','time'],['何も聞かず、隣で夜景を見る。','silence']]},
  return:{text:'今日が終わるの、ちょっと惜しくて。……いや、惜しいことなんて何もなかったんですが。',choices:[['終わらせたくない日は、あります。','reason'],['うまくいかなかった日ほど、そうかも。','bad']]},
  nod:{lead:'相手も、小さく頭を下げた。しばらく、換気扇の音だけがする。',text:'……話さなくていい場所って、案外少ないですね。',choices:[['会社の中だと、特に。','office'],['そのまま、うなずく。','silence']]},
  reason:{text:'帰ったら「今日はどうだった」って聞かれるんです。「いつも通り」って答える自分を、まだ用意できてなくて。',choices:[['ここなら、いつも通りじゃなくても。','honest'],['大事な人には、かえって言えないことも。','home'],['返事をせず、相手の言葉を待つ。','wait']]},
  time:{text:'向こうの窓、まだひとつだけ明るいでしょう。あれが消えたら帰ろうって、さっきから思ってます。',choices:[['あの人も、同じことを考えてたりして。','window'],['それまで、一緒にいます。','silence']]},
  bad:{text:'部下に「大丈夫です」って言われたんです。あれ、本当に大丈夫なときの声じゃなかった。気づいたの、ここに来てからで。',choices:[['明日、もう一度聞けるかもしれない。','tomorrow'],['気づいたことは、なくならないですよ。','honest']]},
  office:{text:'ここでだけ会う人がいて。部署も役職も知らないんですが、向こうは僕の好きな缶コーヒーだけ知ってる。',choices:[['それくらいの距離、いいですね。','distance'],['名前は知らないんですか。','name']]},
  honest:{text:'……今日、少しだけ、嫌な大人になりました。そういう日です。',choices:[['「少しだけ」って、覚えてるんですね。','remember'],['自分にも、そういう日はあります。','distance'],['黙って、うなずく。','wait']]},
  home:{text:'大事に思ってるから、心配させるための説明が難しいんでしょうね。……ここだと、説明しなくても話せるのに。',choices:[['帰る前の、余白なのかもしれません。','distance'],['聞いてます。','wait']]},
  wait:{lead:'遠くで電車が走った。言いかけた言葉を、相手は一度飲み込む。',text:'……すみません。知らない方に、こんな。',choices:[['知らないから、話せたのかも。','distance'],['名前だけでも、聞いていいですか。','name']]},
  window:{text:'もしそうなら、誰かが先に消さないとですね。……僕が帰るほうになってもいいのか。',choices:[['それも、いいと思います。','closing'],['また、あの明かりを見に来ます。','closing']]},
  tomorrow:{text:'そうですね。「大丈夫？」じゃなくて、違う聞き方を考えます。……考えることが、ひとつできた。',choices:[['今夜は、そこまででも。','closing'],['またここで、続きを聞かせてください。','closing']]},
  remember:{text:'忘れないうちは、まだ戻れるんですかね。……答え、急がなくていいです。',choices:[['夜景に目を戻す。','silence'],['また会ったときにでも。','closing']]},
  distance:{text:'ですね。名前も知らない人にしか、言えないこともある。……ここを出たら、お互い普通の顔に戻るんでしょうね。',choices:[['じゃあ、もう少しだけ、このままで。','silence'],['名前、聞かないでおきます。','closing'],['それでも、名前は知りたいです。','name']]},
  name:{revealName:true,text:'ハルです。……下の名前だけ、でいいですか。',choices:[['もちろん。覚えておきます。','closing'],['ハルさん。また、ここで。','closing']]},
  silence:{lead:'ふたりで、明かりの残るビルを眺めた。沈黙を埋める必要はなかった。',text:'……少し、帰れる気がしてきました。',choices:[['おつかれさまでした。','end'],['もう少しだけ残ります。','end']]},
  closing:{text:'そろそろ戻ります。……ああ、違う。今日はもう、帰ります。',choices:[['気をつけて。','end'],['また、どこかの夜に。','end']]},
  end:{leaves:true,lead:'靴音が扉の向こうへ消える。自販機は、さっきと同じ音を立てている。',text:'窓の明かりが、ひとつ消えた。',choices:[]}
 }},
 {id:'sora',name:'ソラ',alias:'火のついていないタバコを持つ人',appearance:'coat',nodes:{
  hello:{lead:'細いコートの人が、火のついていないタバコを指先で転がしている。',text:'すみません。……あ、なんでもないです。',choices:[['火、ですか？','light'],['何か、落としました？','lost'],['会釈して、少し離れて立つ。','space']]},
  light:{text:'いえ。火は持ってるんです。ただ……ここに来る口実、なくなっちゃうなと思って。',choices:[['タバコがなくても、来ていいのでは。','excuse'],['ここで誰かを待ってるんですか。','waiting']]},
  lost:{text:'落としたというか、置いてきたというか。今日、社員証を返してきたんです。',choices:[['最後の日だったんですね。','last'],['それで、ここに。','waiting']]},
  space:{lead:'ひとり分の隙間をあける。相手は、少しだけ肩の力を抜いた。',text:'ここ、話しかけなくても変に思われないのが、好きでした。',choices:[['「でした」？','last'],['黙ったまま、うなずく。','quiet']]},
  excuse:{text:'そうなんですけどね。何も持たずに立ってると、「何かあった？」って聞かれそうで。何か、あったんですけど。',choices:[['聞かないほうが、いい？','gentle'],['ここなら、何かあっても普通です。','normal']]},
  waiting:{text:'前によく一緒になった人が、いて。名前は知らないんです。最後に会えたら、と思っただけ。',choices:[['どんな人ですか。','person'],['今日は、もう帰ったのかもしれませんね。','miss'],['もう少し、待ちますか。','quiet']]},
  last:{text:'はい。明日からは、このビルに用事がないんです。帰り道は覚えたのに、次の道はまだ全然で。',choices:[['寂しいですか。','feeling'],['ここにだけ、寄りたくなったんですね。','waiting']]},
  gentle:{text:'……少しだけなら、聞いてほしいです。変ですよね。顔を知ってる人には、大丈夫って言ってきたのに。',choices:[['ここでは、言わなくていいです。','feeling'],['何も急がず、待つ。','quiet']]},
  normal:{text:'そうですね。怒ってる人も、何も考えてなさそうな人も、ここでは同じ向きに立ってる。',choices:[['名前より、背中を覚えてたり。','person'],['そういう場所が、なくなるのは寂しい。','feeling']]},
  person:{text:'私が失敗した日は、何も聞かずに自販機の前をあけてくれる人。……それだけです。それだけなんですが。',choices:[['覚えているには、十分ですね。','memory'],['お礼を言いたかった？','thanks']]},
  miss:{text:'そうかもしれません。でも、会わないで終わるのも、ここの関係らしい気がします。約束して会ってたわけじゃないから。',choices:[['約束がないから、会うと嬉しい。','memory'],['心の中で、挨拶しておきますか。','thanks']]},
  feeling:{text:'嫌だったことばかり思い出す予定だったのに。最後は、こういうどうでもない場所が寂しいんですね。',choices:[['どうでもなくなったんでしょうね。','memory'],['ここだけは、少し違ったのかも。','memory']]},
  thanks:{text:'「おつかれさまです」じゃ足りないし、「ありがとうございました」だと、大げさで。結局、何も言えないまま。',choices:[['ここで言っても、いいと思います。','say'],['また偶然会ったときに。','chance']]},
  memory:{text:'……私が次にいなくても、ここは普通に続くんですよね。それが、少し安心でもあります。',choices:[['きっと、誰かが同じ場所に立ちます。','chance'],['名前、聞いてもいいですか。','name'],['もう少しだけ、一緒に眺める。','quiet']]},
  say:{lead:'相手は、誰もいない自販機の前を見る。',text:'……ありがとうございました。……うん。これで、いいかな。',choices:[['うなずく。','closing'],['届いた気がします。','closing']]},
  chance:{text:'偶然って、次があるかどうか分からないから、ちゃんと覚えてるんですかね。',choices:[['今日のことも、たぶん。','closing'],['名前を聞く。','name']]},
  name:{revealName:true,text:'ソラです。……次にどこかで会ったら、呼んでください。',choices:[['覚えておきます。','closing']]},
  quiet:{lead:'タバコには、まだ火がつかない。扉が開くたびに、ふたりとも少しだけ顔を上げた。',text:'……そろそろ、行きます。待ってる時間も含めて、挨拶だったのかもしれない。',choices:[['おつかれさまでした。','end'],['次の場所でも、よい夜を。','end']]},
  closing:{text:'聞いてくれて、ありがとうございました。ここに来る理由、今日はこれで十分でした。',choices:[['気をつけて。','end'],['最後に、軽く会釈する。','end']]},
  end:{leaves:true,lead:'コートの裾が扉の向こうに消える。手には、火のついていないタバコが残っていた。',text:'自販機の前が、少しだけ広くなった。',choices:[]}
 }},
 {id:'mina',name:'ミナ',alias:'フェンスにもたれた人',appearance:'casual',nodes:{
  hello:{lead:'フェンスにもたれた人が、ビルの窓を数えるのをやめて、こちらを見る。',text:'今のため息、聞こえました？',choices:[['換気扇の音かと思いました。','joke'],['お互いさまです。','same'],['聞かなかったことにします。','kind']]},
  joke:{text:'それは助かる。じゃあ、今日の分は換気扇が引き受けてくれたということで。',choices:[['けっこう働き者ですね、あれ。','fan'],['何かあったんですか。','meeting']]},
  same:{text:'ここ、ため息の持ち主が分からなくなるのがいいですね。みんな同じ方向を向いてるし。',choices:[['昼間は、なかなか吐けないですから。','day'],['今日は、何人分くらいでしょう。','fan']]},
  kind:{text:'ありがとうございます。それ、今日いちばん気の利いた返事かも。',choices:[['ずいぶん長い一日だったんですね。','meeting'],['静かに夜景を眺める。','quiet']]},
  fan:{text:'昼間あんなに言い合ってた人たちが、さっきここで並んで「寒いですね」って。換気扇、いろいろ聞いてるんでしょうね。',choices:[['ここでは、敵じゃないんですね。','enemy'],['ずっと天気の話でも、いいのに。','weather']]},
  day:{text:'仕事中って、「大丈夫？」に「大丈夫です」って答える速さだけ、上手くなっていく気がして。',choices:[['今は、少しゆっくり答えていいですよ。','slow'],['本当に大丈夫なとき、困りますね。','real']]},
  meeting:{text:'会議で、言わなくていいことを言って。言いたかったことは、言えなかった。……そういう、よくあるやつです。',choices:[['ここなら、言えそうですか。','words'],['今日はもう、会議の外ですよ。','outside']]},
  enemy:{text:'そうなんです。肩書きより先に、「ライター貸してください」が来る場所。少しだけ、順番が違うんですよね。',choices:[['その順番のまま、戻れたら。','outside'],['ここだけの順番でも、いいのかも。','weather']]},
  weather:{text:'「寒いですね」って、本当は「同じ場所にいますね」って意味なのかもしれません。……今、ちょっといいこと言おうとしました。',choices:[['聞かなかったことには、しません。','laugh'],['今夜は、寒いですね。','quiet']]},
  slow:{lead:'相手は少し考えて、フェンスから背を離した。',text:'……まあまあ、です。今は。大丈夫より、そっちのほうが近い。',choices:[['まあまあ、でいきましょう。','closing'],['名前、聞いてもいいですか。','name']]},
  real:{text:'たしかに。「今日は本当に大丈夫です」って、逆に怪しまれそう。',choices:[['少し笑う。','laugh'],['今日の本当は、どうですか。','slow']]},
  words:{text:'ほんとは「分かりません」って言いたかった。分かった顔を続けたら、質問するタイミングがなくなって。',choices:[['明日、途中から聞いてもいいのかも。','tomorrow'],['分からないって、言いづらいですね。','outside']]},
  outside:{text:'外なのに、まだ頭だけ会議室にいました。……ドア、閉めてきたはずなのにね。',choices:[['ここで、閉め直しましょう。','closing'],['換気扇に預けていきますか。','laugh']]},
  tomorrow:{text:'そうですね。「昨日の続き、少し教えて」なら、言えるかな。……いや、言えないかも。まあ、考えてみます。',choices:[['今夜は、そのくらいで。','closing'],['うなずく。','quiet']]},
  laugh:{text:'……ふふ。ここで笑ったの、今日が初めてかも。会議では、あんなに愛想笑いしてたのに。',choices:[['じゃあ、今日も悪いことばかりじゃない。','closing'],['名前を聞く。','name']]},
  name:{revealName:true,text:'ミナです。どこの部署かは……また今度で。',choices:[['ここでは、それで十分です。','closing']]},
  quiet:{lead:'フェンスの向こうから、夜の冷たい空気が入る。ふたりとも、しばらく何も言わなかった。',text:'……寒いですね。',choices:[['寒いですね。','closing'],['笑って、うなずく。','closing']]},
  closing:{text:'じゃ、お先に。……会議の話、ここに置いていきます。明日、拾わなくていいですから。',choices:[['おつかれさまでした。','end'],['私も、何か置いてから帰ります。','end']]},
  end:{leaves:true,lead:'扉がゆっくり閉まる。換気扇だけが、律儀に働き続けていた。',text:'さっきまで聞こえていたため息は、もう誰のものでもない。',choices:[]}
 }}
];
// A comic regular: all chapters use the same reply/hold interaction as the other guests.
CHARACTERS.push({id:'genji',name:'ゲンさん',alias:'くたびれた作業着のおっちゃん',appearance:'scruffy',nodes:{
 hello:{lead:'くたびれた作業着のおっちゃんが、空の胸ポケットを順番に叩いている。頭のてっぺんが、自販機の明かりを拾った。',text:'ライター知らん？ ……あ、持ってる手で探してたわ。今日も絶好調！',choices:[['探し物、早く見つかりましたね。','pockets'],['絶好調の基準、低くないですか。','standard']]},
 pockets:{text:'ポケット六つもあるのに、肝心なもんは手にある。収納に才能がないんよ、俺。',next:'coffee',choices:[]},
 standard:{text:'低くしとくと毎日勝てるぞ。今朝なんか靴下が左右そろった。大勝利。',next:'coffee',choices:[]},
 coffee:{text:'ここの自販機な、俺が来ると必ず「売切」が光るんだ。顔認証かな。……いや、お前さんも小銭入れる前に見ろよって顔すんな！',shared:'ほんとは缶コーヒー飲むと寝られんのよ。買えんで助かってる。自販機には内緒な。',smokeWord:'今日も空振り',choices:[['自販機なりの気遣いかも。','name'],['顔、覚えられてますね。','name']]},
 name:{revealName:true,text:'ゲンさんって呼んで。部署？ そこまで覚えると、仕事頼まれるから黙っとく。ははっ！',next:'end',choices:[]},
 end:{leaves:true,lead:'おっちゃんは吸い殻を灰皿に収め、腹をさすって扉へ向かった。',text:'ほな、お先！ ……押すんだっけ、この扉。引く？ 毎回来てんのになあ。',choices:[]},
 reunion:{lead:'昨日より襟のよれた作業着。おっちゃんが、妙に得意げに立っている。',text:'今日は先に確認した。ライター右手！ 小銭左手！ ……タバコ、下に置いてきた！',next:'reunionTalk',choices:[]},
 reunionTalk:{text:'取りに戻ったら何しに来たか忘れそうでな。ここに立っとけば、そのうち思い出すかと思って。',shared:'今日はもう、このまま帰るわ。忘れ物にも有給をやらんとな。',smokeWord:'忘れ物にも休み',choices:[['今日は手ぶらの休憩ですね。','reunionEnd'],['ライターの所在だけは完璧です。','reunionEnd']]},
 reunionEnd:{leaves:true,text:'おう！ 成長が見られるだろ。……あ、小銭だけ先にしまっとこ。落とす未来が見えた。',choices:[]},
 third:{lead:'おっちゃんが自販機の売切ランプに、小さく手を振っている。',text:'来週から現場が変わるんよ。この自販機ともお別れ。最後くらい買わせてくれんかな。',next:'thirdTalk',choices:[]},
 thirdTalk:{text:'結局、ここで買えたの水だけだわ。俺、コーヒー仲間のつもりだったのに。向こうは水の客だと思ってるな。',shared:'でも、お前さんと話せた日は、缶持ってなくても休憩した気になるんよ。……今の、ちょっと格好つけた。取り消し！',smokeWord:'缶がなくても',choices:[['水の常連さん、お元気で。','lastEnd'],['次の自販機とは仲良く。','lastEnd']]},
 lastEnd:{leaves:true,text:'おう！ 次は売切じゃないやつと付き合うわ。……ほなな、話し相手ありがとさん！',choices:[]},
 letter:{lead:'自販機の横に、裏紙を雑に折ったメモがある。',text:'「新しい現場の自販機、コーヒー売ってた。砂糖と塩まちがえて買ったかと思うほど苦い。ブラックって書いてあった。ゲン」',choices:[]},
 returned:{lead:'扉から、聞き覚えのある笑い声。おっちゃんの胸ポケットには、缶コーヒーが刺さっている。',text:'差し入れ！ ……と思ったけど、ここまで歩いてぬるくなった。脇で温めてたからな。受け取りづらい？ 正直でよろしい！',next:'reunionTalk',choices:[]}
}});
export function findCharacter(id){return CHARACTERS.find(person=>person.id===id)||null;}
export function getDialogue(characterId,nodeId='hello'){return findCharacter(characterId)?.nodes[nodeId]||null;}
/** Each visit chooses a stranger, excluding the preceding encounter. No persistent history. */
export function chooseCharacter(previousId=null,random=Math.random){const pool=CHARACTERS.filter(p=>p.id!==previousId);const index=Math.min(pool.length-1,Math.max(0,Math.floor(random()*pool.length)));return pool[index];}

// Additional nights. A full goodbye advances the arc; leaving early does not.
const ARCS={
 haru:{
  reunion:{lead:'窓際に、見覚えのある背中。今日はネクタイが、少しだけ真っ直ぐだ。',text:'この前も、いましたよね。……あのあと、帰れました？',choices:[['帰れました。そちらは？','reunionTalk'],['あの窓、今日は消えてますね。','reunionTalk']]},
  reunionTalk:{text:'「今日はどうだった」って聞かれて、「まあまあ」って答えました。いつも通り、よりは少し長く話せた気がします。',shared:'……あの夜、隣に誰かいたことは、家では言わなかったです。言わないまま持っておきたいことも、ありますね。',smokeWord:'うまく言えなくても',choices:[['それくらいの変化が、いいですね。','reunionEnd'],['黙って、同じ窓を見る。','reunionEnd']]},
  reunionEnd:{leaves:true,text:'じゃ、今日は明かりが消える前に。……また、ここで。',choices:[]},
  third:{lead:'同じ窓際。相手は、こちらが来る前から二人分の隙間をあけている。',text:'来週から、別のビルなんです。だから、この窓を見るのも、たぶん今日まで。',choices:[['会えてよかったです。','thirdTalk'],['あの缶コーヒーは、向こうにもありますか。','thirdTalk']]},
  thirdTalk:{text:'あるといいですね。……名前、今さらですが、ハルです。部署より先に、こっちを覚えてもらえたら。',revealName:true,shared:'ほんとは、もう一回だけ会えたらと思ってました。……これ、さっき買った二本目なんです。',smokeWord:'もう一度だけ',choices:[['覚えておきます。','lastEnd'],['また、どこかの窓際で。','lastEnd']]},
  lastEnd:{leaves:true,text:'……おつかれさまでした。今夜は、ちゃんと帰れそうです。',choices:[]},
  letter:{lead:'窓際には、誰もいない。自販機の横に、小さな紙が挟まっている。',text:'「あの日、あの明かりが消えたあとも、一人ではなかった気がします。ありがとう。——ハル」',choices:[]},
  returned:{lead:'久しぶりに、あのネクタイの人がいる。',text:'……今日は前の部署に用事があって。窓が変わってないか、つい見に来ました。',choices:[['おかえりなさい。','reunionTalk'],['あの紙、読みました。','reunionTalk']]}
 },
 sora:{
  reunion:{lead:'自販機の横。火のついていないタバコを持つ、あの人がいる。',text:'……忘れ物を取りに。今日は、そういう口実です。',choices:[['会えてよかったです。','reunionTalk'],['待っていた人には、会えました？','reunionTalk']]},
  reunionTalk:{text:'会えませんでした。でも、別の誰かと少し話せました。だから、空振りでもなかったです。',shared:'忘れ物、ほんとはもうないんです。来ちゃいけない場所になった気がして、理由を用意しただけ。',smokeWord:'帰る理由より',choices:[['理由がなくても、来ていいと思います。','reunionEnd'],['次は、ただ休憩に。','reunionEnd']]},
  reunionEnd:{leaves:true,text:'じゃ、また。……次に使う口実、考えなくてもいいかな。',choices:[]},
  third:{lead:'同じコート。今日は手にタバコではなく、温かい缶を持っている。',text:'来月、少し遠くに引っ越します。最後に、この缶だけ買いに来ました。',choices:[['ここで飲むと、味が違いそうですね。','thirdTalk'],['少し、一緒にいましょうか。','thirdTalk']]},
  thirdTalk:{revealName:true,text:'ソラです。ずっと、名前を言う機会を逃してました。……最後じゃなくても、言えたはずなのに。',shared:'駅を通り過ぎて、戻ってきました。何を言うかは、ここに来てから考えようって。',smokeWord:'名前を呼ぶには',choices:[['ソラさん。覚えました。','lastEnd'],['次に会ったら、こちらから呼びます。','lastEnd']]},
  lastEnd:{leaves:true,text:'それ、楽しみにしてます。……じゃあ、今度こそ行きます。',choices:[]},
  letter:{lead:'自販機の横に、紙が一枚。コートの人の姿はない。',text:'「何も持たなくても、立っていていい場所でした。また、どこかで。——ソラ」',choices:[]},
  returned:{lead:'久しぶりに見かけるコートが、風に揺れている。',text:'こんにちは。今日は、ただ休憩に。……やっと、それだけ言えるようになりました。',choices:[['おかえりなさい。','reunionTalk'],['いつもの場所、あいてます。','reunionTalk']]}
 },
 mina:{
  reunion:{lead:'フェンスのそば。こちらに気づいた相手が、口元だけで笑う。',text:'今日は、換気扇に間違われるほどため息ついてません。……たぶん。',choices:[['会議の話、拾わずにおきました。','reunionTalk'],['今日は、まあまあですか。','reunionTalk']]},
  reunionTalk:{text:'「昨日の続き、教えて」って言ってみました。相手も「実は分かってなかった」って。二人で困ることになりました。',shared:'一人で困ってるよりは、少しだけましでした。……そう言えるの、ここだけなんですけど。',smokeWord:'大丈夫、の代わりに',choices:[['それなら、まあまあですね。','reunionEnd'],['少し笑う。','reunionEnd']]},
  reunionEnd:{leaves:true,text:'じゃあ、今日は二人分のため息を置いて。お先に。',choices:[]},
  third:{lead:'フェンスから離れた相手が、いつもより遠いビルを眺めている。',text:'勤務する場所、変わるんです。次のところには、こういう余白、あるかな。',choices:[['似た場所を、探してしまいそうですね。','thirdTalk'],['なければ、作ってしまうとか。','thirdTalk']]},
  thirdTalk:{revealName:true,text:'ミナです。何階の誰か、より、ここで会った人のまま覚えていてください。',shared:'初めて話した日、あのあと少し泣きました。……笑えたから、緊張がほどけたのかも。',smokeWord:'ほんとは、少し',choices:[['ここで会ったミナさん、ですね。','lastEnd'],['また、寒いですねって話しましょう。','lastEnd']]},
  lastEnd:{leaves:true,text:'約束じゃなくて、偶然で。また会えたら、嬉しいです。',choices:[]},
  letter:{lead:'フェンスのそばには誰もいない。自販機の横に、折った紙がある。',text:'「換気扇は元気そうですか。ため息を置く場所、こちらにも見つけました。——ミナ」',choices:[]},
  returned:{lead:'フェンスにもたれた、見覚えのある姿。',text:'寒いですね。……別に用事は、それだけです。',choices:[['寒いですね。','reunionTalk'],['それだけで、十分です。','reunionTalk']]}
 }
};
for(const person of CHARACTERS)Object.assign(person.nodes,ARCS[person.id]);
// These are quiet openings, not time-limited rhythm challenges.
const MOMENTS={haru:{hello:['……実は、扉の前まで行って、何度か戻ってきてるんです。','帰りたくない'],reason:['説明しなくても、隣にいてもらえるのは、少し助かります。','うまく言えない'],honest:['……あの子に、明日はちゃんと目を見て話せるかな。','ほんとは謝りたい']},sora:{hello:['……声をかけてくれて、少しほっとしました。','あと少しだけ'],waiting:['待ってるって言うほど、約束してないんですけどね。','名前も知らない'],feeling:['……最後だから、寂しいって認めてもいいのかな。','置いていくもの']},mina:{hello:['……実は、今日はもう誰とも話さないつもりでした。','大丈夫じゃない日'],meeting:['怒ってたんじゃなくて、分かってもらえなくて、悔しかったのかも。','言えなかったこと'],words:['……分からないって、ちゃんと言ってもいいんでしょうね。','分かった顔の向こう']}};
for(const person of CHARACTERS)for(const [id,[shared,smokeWord]]of Object.entries(MOMENTS[person.id]||{}))Object.assign(person.nodes[id],{shared,smokeWord});

// A reply is now needed only at a few emotional turning points.
// Other beats continue with “next”, without making the player choose an obvious response.
const CONTINUATIONS={
 haru:{stay:'reason',return:'bad',nod:'office',time:'window',bad:'tomorrow',honest:'remember',home:'distance',wait:'distance',window:'closing',tomorrow:'closing',remember:'silence',name:'closing',silence:'end',closing:'end',reunion:'reunionTalk',third:'thirdTalk',returned:'reunionTalk'},
 sora:{light:'excuse',lost:'last',space:'quiet',last:'waiting',gentle:'feeling',normal:'person',person:'memory',miss:'chance',feeling:'memory',thanks:'say',say:'closing',chance:'closing',name:'closing',quiet:'end',closing:'end',reunion:'reunionTalk',third:'thirdTalk',returned:'reunionTalk'},
 mina:{joke:'fan',same:'day',kind:'meeting',enemy:'outside',weather:'quiet',slow:'closing',real:'laugh',outside:'closing',tomorrow:'closing',laugh:'closing',name:'closing',quiet:'closing',closing:'end',words:'tomorrow',reunion:'reunionTalk',third:'thirdTalk',returned:'reunionTalk'}
};
for(const person of CHARACTERS){
 for(const [id,next]of Object.entries(CONTINUATIONS[person.id]||{}))Object.assign(person.nodes[id],{next,choices:[]});
 // Keep only scenes used by these quieter routes; all five chapter entries remain available.
 const reachable=new Set();
 function walk(id){if(reachable.has(id))return;reachable.add(id);const node=person.nodes[id];if(node.next)walk(node.next);for(const [,next]of node.choices)walk(next);}
 for(const entry of ['hello','reunion','third','letter','returned'])walk(entry);
 for(const id of Object.keys(person.nodes))if(!reachable.has(id))delete person.nodes[id];
}
