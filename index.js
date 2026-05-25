const TelegramBot =
require('node-telegram-bot-api')

const bot =
new TelegramBot(
  '8899094133:AAH4Ok0uUZkfyABrrLv7VJQGtiAkXRN-nGU',
  { polling: true }
)

// START
bot.onText(
/\/start/,

(msg) => {

  bot.sendMessage(

    msg.chat.id,

'Hai🫵\n\nMain suit yuk!',

{
  reply_markup: {

    inline_keyboard: [[

      {
        text: '🎮 Ayo Suit',
        callback_data: 'Ayo_suit'
      }

    ]]

  }
}

  )

})

// BUTTON
bot.on(
'callback_query',

async (query) => {

  const data =
  query.data

  const chatId =
  query.message.chat.id

  // buka pilihan
  if (
    data === 'ayo_suit'
  ) {

    return bot.sendMessage(

      chatId,

'Pilih tanganmu 🤭',

{
  reply_markup: {

    inline_keyboard: [[

      {
        text: '🪨 Batu',
        callback_data: 'batu'
      },

      {
        text: '📄 Kertas',
        callback_data: 'kertas'
      },

      {
        text: '✂️ Gunting',
        callback_data: 'gunting'
      }

    ]]

  }
}

    )

  }

  // pilihan bot
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

  // emoji
  const emoji = {

    batu: '🪨 Batu',
    kertas: '📄 Kertas',
    gunting: '✂️ Gunting'

  }

  let hasil

  // seri
  if (
    data === randomBot
  ) {

    hasil =
    '🤝 Kita Sepakat Hasilnya SERI'

  }

  // menang
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
    '🏆 kamu menang'

  }

  // kalah
  else {

    hasil =
    '😂 Kamu kalah'

  }

  // kirim hasil
  bot.sendMessage(

    chatId,

`Kamu:
${emoji[data]}

Bot:
${emoji[randomBot]}

${hasil}`

  )

})
