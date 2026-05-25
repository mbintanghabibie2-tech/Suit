const TelegramBot =
require('node-telegram-bot-api')

const bot =
new TelegramBot(
  'TOKEN_BOT_KAMU',
  { polling: true }
)

// START
bot.onText(
/\/start/,

(msg) => {

  bot.sendMessage(

    msg.chat.id,

`Hai 🫵

Main suit yuk 😭🔥`,

{
  reply_markup: {

    inline_keyboard: [[

      {
        text: '🎮 Ayo Suit',
        callback_data: 'main'
      }

    ]]

  }
}

  )

})

// CALLBACK BUTTON
bot.on(
'callback_query',

async (query) => {

  const data =
  query.data

  const chatId =
  query.message.chat.id

  // MENU PILIHAN
  if (data === 'main') {

    return bot.sendMessage(

      chatId,

`Pilih tangan mu 😏`,

{
  reply_markup: {

    inline_keyboard: [

      [

        {
          text: '🪨 Batu',
          callback_data: 'batu'
        },

        {
          text: '📄 Kertas',
          callback_data: 'kertas'
        }

      ],

      [

        {
          text: '✂️ Gunting',
          callback_data: 'gunting'
        }

      ]

    ]

  }
}

    )

  }

  // PILIHAN BOT
  const pilihanBot = [

    'batu',
    'kertas',
    'gunting'

  ]

  const randomBot =

    pilihanBot[
      Math.floor(
        Math.random() *
        pilihanBot.length
      )
    ]

  // EMOJI
  const emoji = {

    batu:
    '🪨 Batu',

    kertas:
    '📄 Kertas',

    gunting:
    '✂️ Gunting'

  }

  let hasil

  // SERI
  if (
    data === randomBot
  ) {

    hasil =
    '😐 Yah seri'

  }

  // MENANG
  else if (

    (
      data === 'batu' &&
      randomBot === 'gunting'
    )

    ||

    (
      data === 'gunting' &&
      randomBot === 'kertas'
    )

    ||

    (
      data === 'kertas' &&
      randomBot === 'batu'
    )

  ) {

    hasil =
    '🏆 Kamu menang 😭🔥'

  }

  // KALAH
  else {

    hasil =
    '😂 Yah kamu kalah'

  }

  // HASIL
  bot.sendMessage(

    chatId,

`${hasil}

Kamu:
${emoji[data]}

Aku:
${emoji[randomBot]}`,

{
  reply_markup: {

    inline_keyboard: [[

      {
        text:
        '🔄 Suit Lagi!',
        callback_data:
        'main'
      }

    ]]

  }
}

  )

})
