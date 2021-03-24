//Anjing Mau Nyolong Ya ?
//Kasih Nama Itsmeiky Lah Bang Hargain Dikit Gw Capek :(
//And Gw Mencium Bau Bau Ada Kang Colong Case Nih :v
//Gak Usah Di Hapus Gblk Dimana Harga Diri Lu Gw Capek2 Ngefix malah di hapus
//Fixed Some Bug By ItsmeikyXSec404 & RzkyO
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const imgbb = require('imgbb-uploader')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { ind } = require('./language')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Marcel\n' 
            + 'ORG: Pengembang BOT;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6285372906349:+62 853-7290-6349\n' 
            + 'END:VCARD'
prefix = ''
blocked = []   
limitawal = 10
memberlimit = 0
cr = '*BOT THIS IS ALREADY VERIFIED*'

/******** OWNER NUMBER**********/
const ownerNumber = ["6285372906349@s.whatsapp.net","12562120001@s.whatsapp.net"] 
const pacarNumber = ["6281291517710@s.whatsapp.net"]
/************************************/

       
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/user/admin.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const itsmeiky = new WAConnection()
   itsmeiky.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('QR code is ready, Scan now..','white'),color('ITSMEIKY','red'),color('XSEC404','lime'))
})

itsmeiky.on('credentials-updated', () => {
	const authInfo = itsmeiky.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && itsmeiky.loadAuthInfo('./session.json')
itsmeiky.connect();


itsmeiky.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await itsmeiky.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await itsmeiky.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Hallo* 👋 @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*`
				let buff = await getBuffer(ppimg)
				itsmeiky.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await itsmeiky.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Kudoakan semoga besok di tabrak meong* @${num.split('@')[0]}\n*Saitan will miss you* ❤️`
				let buff = await getBuffer(ppimg)
				itsmeiky.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	itsmeiky.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
itsmeiky.on('message-update', async (hurtz) => {
	try {
		const from = hurtz.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		sender = hurtz.key.fromMe ? itsmeiky.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
        if (sender == undefined) sender = itsmeiky.user.jid
if (messageStubType == 'REVOKE' && isRevoke) {
	sender = hurtz.key.fromMe ? itsmeiky.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		if (sender == undefined) sender = itsmeiky.user.jid
	try {
					ppimg = await itsmeiky.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				    buffer = await getBuffer(ppimg)
					const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
                    const from = hurtz.key.remoteJid
					const groupMetadata = isGroup ? await itsmeiky.groupMetadata(from) : ''
					const groupMembers = isGroup ? groupMetadata.participants : ''
					okok = []
					for (let o of groupMembers) {
						okok.push(o.jid)
					}
                    sender = hurtz.key.fromMe ? itsmeiky.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
					if (sender == undefined) sender = itsmeiky.user.jid
                    let int
                    let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
                    const id_deleted = hurtz.key.id
                    const conts = hurtz.key.fromMe ? itsmeiky.user.jid : itsmeiky.contacts[sender] || { notify: jid.replace(/@.+/, '') }
                    const pushname = hurtz.key.fromMe ? itsmeiky.user.name : conts.notify || conts.vname || conts.name || '-'
                   if (pushname == undefined) pushname = '-'
					for (let i = 0; i < infoMSG.length; i++) {
                         if (infoMSG[i].key.id == id_deleted) {
                              const dataInfo = infoMSG[i]
                              const type = Object.keys(infoMSG[i].message)[0]
                              const timestamp = infoMSG[i].messageTimestamp
                              int = {
                                   no: i,
                                   type: type,
                                   timestamp: timestamp,
                                   data: dataInfo
 
                              }
                         }
                    }
                    const index = Number(int.no)
                    const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
                    const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
                    if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
                         const strConversation = `\*◪* *ANTIDELETE*\n*│*
*│* *Nama* : ${pushname} ( @${sender.replace('@s.whatsapp.net', '')} )
*│* *Tipe* : Text
*│* *Waktu* : ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
*│* *Pesan* : ${body ? body : '-'}`
 
                         itsmeiky.sendMessage(from, strConversation, MessageType.text, { contextInfo: {mentionedJid: okok, isForwarded: true, forwardingScore: 300}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                    } else if (int.type == 'stickerMessage') {
                         const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                         const savedFilename = await itsmeiky.downloadAndSaveMediaMessage(int.data, `./src/${filename}`);
                         const strConversation = `*◪* *ANTIDELETE*\n*│*\n*│* Nama: ${pushname}\n*│* Tag: @${sender.replace('@s.whatsapp.net', '')}\n*│* Tipe : Sticker\n*│* Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}`
				const buff = fs.readFileSync(savedFilename)
				itsmeiky.sendMessage(from, strConversation, MessageType.text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
               itsmeiky.sendMessage(from, buff, MessageType.sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
               // console.log(stdout)
				fs.unlinkSync(savedFilename)
 
			} else if (int.type == 'imageMessage') {
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await itsmeiky.downloadAndSaveMediaMessage(int.data, `./src/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation =  `*◪* *ANTIDELETE*\n*│*\n*│* Nama : ${pushname}\n*│* Tag: @${sender.replace('@s.whatsapp.net', '')}\n*│* Tipe : Image\n*│* Pesan: ${body ? body : '-'}\n*│* Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}`
                         itsmeiky.sendMessage(from, buff, MessageType.image, { contextInfo: {mentionedJid: okok}, caption: strConversation, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                 fs.unlinkSync(savedFilename)
			} else if (int.type == 'audioMessageMessage') {
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await itsmeiky.downloadAndSaveMediaMessage(int.data, `./src/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation =  `*◪* *ANTIDELETE*\n*│*\n*│* Nama : ${pushname}\n*│* Tag: @${sender.replace('@s.whatsapp.net', '')}\n*│* Tipe : Audio\n*│* Pesan: ${body ? body : '-'}\n*│* Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}`
                         itsmeiky.sendMessage(from, buff, MessageType.audio, { contextInfo: {mentionedJid: okok}, filename: `${pushname}`, mimetype: 'audio/mp4', quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                   fs.unlinkSync(savedFilename)
 
                    }
               }
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})

	itsmeiky.on('message-new', async (iky) => {
		try {
			if (!iky.message) return
			if (iky.key && iky.key.remoteJid == 'status@broadcast') return
			if (iky.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(iky.message)
			const from = iky.key.remoteJid
			const type = Object.keys(iky.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && iky.message.conversation.startsWith(prefix)) ? iky.message.conversation : (type == 'imageMessage') && iky.message.imageMessage.caption.startsWith(prefix) ? iky.message.imageMessage.caption : (type == 'videoMessage') && iky.message.videoMessage.caption.startsWith(prefix) ? iky.message.videoMessage.caption : (type == 'extendedTextMessage') && iky.message.extendedTextMessage.text.startsWith(prefix) ? iky.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? iky.message.conversation : (type === 'extendedTextMessage') ? iky.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && iky.message.conversation) ? iky.message.conversation : (type == 'imageMessage') && iky.message.imageMessage.caption ? iky.message.imageMessage.caption : (type == 'videoMessage') && iky.message.videoMessage.caption ? iky.message.videoMessage.caption : (type == 'extendedTextMessage') && iky.message.extendedTextMessage.text ? iky.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = itsmeiky.user.jid
			const sender = isGroup ? iky.participant : iky.key.remoteJid
			pushname = itsmeiky.contacts[sender] != undefined ? itsmeiky.contacts[sender].vname || itsmeiky.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await itsmeiky.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPacar = pacarNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				itsmeiky.sendMessage(from, teks, text, {quoted:iky})
			}
			const sendMess = (hehe, teks) => {
				itsmeiky.sendMessage(hehe, teks, text)
			}
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }
			
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? itsmeiky.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : itsmeiky.sendMessage(from, teks.trim(), extendedText, {quoted: iky, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    itsmeiky.sendMessage(from, teks, image, {quoted:iky})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			itsmeiky.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    itsmeiky.sendMessage(from, audio, mp3, {quoted:iky})
		    }
	        /*****************END SCURITY FEATURE ********/
			
		//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
	}
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
        function addMetadata(packname, author) {
				if (!packname) packname = 'termux-bot-wa'; if (!author) author = ' Fxc7';
				author = author.replace(/[^a-zA-Z0-9]/g, '');
				let name = `${author}_${packname}`

				if (fs.existsSync(`./src/stickers/${name}.exif`)) {
					return `./src/stickers/${name}.exif`
				}
				const json = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}

				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

				let len = JSON.stringify(json).length
				let last

				if (len > 256) {
					len = len - 256
					bytes.unshift(0x01)
				} else {
					bytes.unshift(0x00)
				}

				if (len < 16) {
					last = len.toString(16)
					last = "0" + len
				} else {
					last = len.toString(16)
				}

				const buf2 = Buffer.from(last, "hex")
				const buf3 = Buffer.from(bytes)
				const buf4 = Buffer.from(JSON.stringify(json))

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {
					return `./src/stickers/${name}.exif`
				}
			)
		}
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return itsmeiky.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: iky})
                            itsmeiky.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : iky})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        itsmeiky.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : iky})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    itsmeiky.sendMessage(from, ind.limitend(pushname), text, {quoted: iky})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		itsmeiky.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('byee')
		}, 1100)
		setTimeout( () => {
		itsmeiky.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`Link Group Terdeteksi maaf *${pushname}* anda akan di kick`)
		}, 0)
	}

             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
		case 'mutual': // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply(`Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'next': // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
        case 'join':
                    if (!isOwner) return reply(ind.ownerb())
                    const link = args[1]
                    itsmeiky.groupLeave (from)
                    const minMem = 8
                    const check = await itsmeiky.inviteInfo(link)
                    const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
                    if (!isLink) return itsmeiky.reply(from, 'Ini link? 👊🤬')
                    if (tGr.length > 50) return itsmeiky.reply(from, 'Maaf jumlah group sudah maksimal!')
                    if (check.size < minMem) return itsmeiky.reply(from, 'Member group tidak melebihi 8, Bot tidak bisa masuk')
                    if (check.status === 200) {
                        await itsmeiky.joinGroupViaLink(link).then(() => itsmeiky.reply(from, 'otewe masuk!'))
                    } else {
                        itsmeiky.reply(from, 'Link group tidak valid!', id)
                    }
                    break
		case 'transfer':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                		const tujuan = q.substring(0, q.indexOf('|') - 1)
                		const jumblah = q.substring(q.lastIndexOf('|') + 1)
                		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                		if (jumblah < 5000 ) return reply(`minimal transfer 5000`)
                		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                		fee = 0.010 *  jumblah
                		hasiltf = jumblah - fee
                		addKoinUser(tujuantf, hasiltf)
                		confirmATM(sender, jumblah)
                		addKoinUser('6285372906349@s.whatsapp.net', fee)
                		reply(`*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : +${sender.split("@")[0]}\nKe : +${tujuan}\njJumlah transfer : ${jumblah}\nPajak : ${fee}`)
                		break
              case 'trigger':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky 
					reply(ind.wait())
					owgi = await  itsmeiky.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					itsmeiky.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
					break  
				case 'wasted':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky 
					reply(ind.wait())
					owgi = await  itsmeiky.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					itsmeiky.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
              case 'hai':
              case 'hi':
              case 'hei':
              case 'hey':
              case 'hii':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				let ainecs = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-02-10-at-02.16.542.opus')
				itsmeiky.sendMessage(from, ainecs, MessageType.audio, { quoted: iky, ptt: true })
				await limitAdd(sender)
				break
              case 'Uraa':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				let ainezz = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-02-10-at-02.39.39.opus')
				itsmeiky.sendMessage(from, ainezz, MessageType.audio, { quoted: iky, ptt: true })
				await limitAdd(sender)
				break
              case 'soundbakahentai':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				let aineess = fs.readFileSync('./mp3/WhatsApp-Audio-2021-02-19-at-23.33.29.opus')
				itsmeiky.sendMessage(from, aineess, audio, {mimetype: 'audio/mp4', filename: `bakahentai.mp3`, quoted: iky})
				await limitAdd(sender)
				break
              case 'sayonichan':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				let aineesi = fs.readFileSync('./mp3/Loli-Saying-Onii-Chan-Sound.opus')
				itsmeiky.sendMessage(from, aineesi, MessageType.audio, { quoted: iky, ptt: true })
				await limitAdd(sender)
				break
              case 'soundplaydate':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				let aineesiie = fs.readFileSync('./mp3/Play-Date-Melanie-Martinez-Cover-by-邢凯悦XKY.mp3')
				itsmeiky.sendMessage(from, aineesiie, MessageType.audio, { quoted: iky, ptt: true })
				await limitAdd(sender)
				break
              case 'hallo':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				let aineesii = fs.readFileSync('./mp3/little-girl-sayingtalking-hello-sound-effectcute-sound-effectsadorable.opus')
				itsmeiky.sendMessage(from, aineesii, MessageType.audio, { quoted: iky, ptt: true })
				await limitAdd(sender)
				break
                case 'admin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(7)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
				break
                case 'unadmin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(9)
				admin.push(`${adm}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${adm} `)
				break
                case 'wakillist':
				itsmeiky.updatePresence(from, Presence.composing) 
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of admin bot number :\n'
				for (let admm of adm) {
					teks += `~> @${admm.split('@')[0]}\n`
					}
					teks += `Total : ${admm.length}`
				itsmeiky.sendMessage(from, teks.trim(), extendedText, {quoted: iky, contextInfo: {"mentionedJid": adm}})
				break
                case 'premium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(9)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
				reply(`Berhasil menjadi premium wa.me/${premm} `)
				break
		case 'unpremium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(11)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
				reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				break
                case 'premiumlist':
				itsmeiky.updatePresence(from, Presence.composing) 
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				itsmeiky.sendMessage(from, teks.trim(), extendedText, {quoted: iky, contextInfo: {"mentionedJid": prem}})
				break
                case 'bann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unbann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'banlist':
				itsmeiky.updatePresence(from, Presence.composing) 
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				itsmeiky.sendMessage(from, teks.trim(), extendedText, {quoted: iky, contextInfo: {"mentionedJid": ban}})
				break

		case 'leaderboard':
		case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break
		case 'kalkulator':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
		case 'dompet':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
		case 'buylimit':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(10)
				const koinPerlimit = 2000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'buypremiumlimit':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(17)
				const koinpremPerlimit = 500
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
					confirmATM(sender, totalprem)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinpremPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'giftlimit': 
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isOwner) return reply(ind.ownerb())
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895710074883 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 GIFT KUOTA LIMIT 」*
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Limit: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        	}
               			break       
                case 'moddroid':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
				hepi = data.result[0] 
				teks = `*Nama*: ${data.result[0].title}\n*Publisher*: ${hepi.publisher}\n*Mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*Latest version*: ${hepi.latest_version}\n*Genre*: ${hepi.genre}\n*Link:* ${hepi.link}\n*Download*: ${hepi.download}`
				buffer = await getBuffer(hepi.image)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: `${teks}`})
				await limitAdd(sender)
				break
		case 'happymod':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
				hupo = data.result[0] 
				teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
				buffer = await getBuffer(hupo.image)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: `${teks}`})
				await limitAdd(sender)
				break
		case 'apkpure':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'jadwalbola': // Update By RzkyO & ItsmeikyXSec404			
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.vhtear.com/jadwalbola&apikey=Tebingtinggi123`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result.data) {
					teks += `❏ *Kick Off* : ${i.kickoff}\n❏ *Pertandingan* : ${i.pertandingan}\n❏ *Stasiuntv* : ${i.stasiuntv}\n\n=================\n\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'coronainfo': // Update By RzkyO & ItsmeikyXSec404
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.vhtear.com/corona&apikey=Tebingtinggi123`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Updated* : ${i.updated}\n*Country* : ${i.country}\n*CountryInfo* : \n*ID* : ${i.countryInfo._id}\n*iso2* : ${i.countryInfo.iso2}\n*iso3* : ${i.countryInfo.iso3}\n*lat* : ${i.countryInfo.lat}\n*long* : ${i.countryInfo.long}\n*cases* : ${i.cases}\n*todayCases* : ${i.todayCases}\n*deaths* : ${i.deaths}\n*todayDeaths* : ${i.todayDeaths}\n*recovered* : ${i.recovered}\n*todayRecovered* : ${i.todayRecovered}\n*active* : ${i.active}\n*critical* : ${i.critical}\n*casesPerOneMillion* : ${i.casesPerOneMillion}\n*deathsPerOneMillion* : ${i.deathsPerOneMillion}\n*tests* : ${i.tests}\n*testsPerOneMillion* : ${i.testsPerOneMillion}\n*population* : ${i.population}\n*continent* : ${i.continent}\n*oneCasePerPeople* : ${i.oneCasePerPeople}\n*oneDeathPerPeople* : ${i.oneDeathPerPeople}\n*oneTestPerPeople* : ${i.oneTestPerPeople}\n*activePerOneMillion* : ${i.activePerOneMillion}\n*recoveredPerOneMillion* : ${i.recoveredPerOneMillion}\n*criticalPerOneMillion* : ${i.criticalPerOneMillion}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'bitly':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				itsmeiky.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'cuttly':
				 // Update By RzkyO & ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				itsmeiky.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'tinyurl':
				 // Update By RzkyO & ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				itsmeiky.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/shorturl?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shrtco':
				 // Update By RzkyO & ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				itsmeiky.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=WEMPYGANSS`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
                case 'nangis':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/bj18?apikey=itsmeiky633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						itsmeiky.sendMessage(from, buffer, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'blowjob':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/bj18?apikey=itsmeiky633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						itsmeiky.sendMessage(from, buffer, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'rdmhentai':
		case 'randomhentai':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                        gatauda = body.slice(12)
					reply(ind.wait())//https://api.shizukaa.xyz/api/randomimage?apikey=itsmeiky633
                                        anu = await fetchJson(`https://api.vhtear.com/$={gatauda}?apikey=Tebingtinggi123`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        itsmeiky.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					await limitAdd(sender)
                                        break
		case 'cium':
                                         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/randomimage?apikey=itsmeiky633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						itsmeiky.sendMessage(from, buffer, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'peluk':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/randomimage?apikey=itsmeiky633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						itsmeiky.sendMessage(from, buffer, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'nulis':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(6)
				reply(ind.wait())
				ct = await getBuffer(`https://hans-apikey.herokuapp.com/api/nulis?text=${body.slice(6)}&apikey=hansdev`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'nulis2':
				 // Update By RzkyO & ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
                 if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				reply(ind.wait())
				ct = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${ct}&apikey=benbenz`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'nulis3':
				 // Update By RzkyO & ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
                 if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
                ll3 = ct.split("|")[2];
                ll4 = ct.split("|")[3];
				reply(ind.wait())
				ct = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${ll1}&kelas=${ll2}&text=${ll3}&tinta=${ll4}`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'nulis4':
				 // Update By RzkyO & ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				reply(ind.wait())
				ct = await getBuffer(`https://api.vhtear.com/write?text=${ct}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'galaxtext':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=WEMPYGANSS&text=${ct}`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'pupycut':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(8)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/puppycute?apikey=WEMPYGANSS&text=${ct}`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'galaxstyle':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxystyle?apikey=WEMPYGANSS&text=${ct}`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'hologram':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(9)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/hologram3d?apikey=WEMPYGANSS&text=${ct}`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'textbyname':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/textbyname?apikey=WEMPYGANSS&text=${ct}`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'herrypoter':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/photooxy1/harrypotter?apikey=WEMPYGANSS&text=${ct}`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'greanneon':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/greenneon?apikey=WEMPYGANSS&text=${ct}`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'metallogo':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=WEMPYGANSS&text=${ct}`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		/*case 'nulis2':
				const textnulis = body.slice(7)
				let inputPath ='./lib/magernulis1.jpg'
 			   let outputPath = './tmp/hasil.jpg'
			    let d = new Date
			    let tgl = d.toLocaleDateString('id-Id')
			    let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 			 //  reply('p\n' + util.format({fontPath, inputPath, outputPath, tgl, hari, textnulis}))
				  spawn('convert', [
				    inputPath,
				    '-font',
				    fontPath,
				    '-size',
				    '1024x784',
				    '-pointsize',
				    '20',
 				   '-interline-spacing',
				    '1',
				    '-annotate',
 				   '+806+78',
				    hari,
  				  '-font',
  				  fontPath,
  				  '-size',
  				  '1024x784',
  				  '-pointsize',
  				  '18',
  				  '-interline-spacing',
  				  '1',
  				  '-annotate',
   				 '+806+102',
 				   tgl,
 				   '-font',
  				  fontPath,
   				 '-size',
				    '1024x784',
 				   '-pointsize',
 				   '20',
  				  '-interline-spacing',
  				  '-7.5',
  				  '-annotate',
 				   '+344+142',
 				   textnulis,
    				outputPath
				  ])
 				 .on('error', e => reply(util.format(e))
 				 .on('exit', () => {
  			  itsmeiky.sendMessage(from, outputPath, image, {quoted: iky, caption : ' nih sayang, jangan mager ya sayang'})
  			}))
  			  break*/
		case 'bplogo':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				vinz = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/logobp?text=${vinz}&apikey=apivinz`)
				buffer = await getBuffer(anu.result)
				itsmeiky.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'hartatata':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(11)
				reply(ind.wait())
				bh = await getBuffer(`https://mhankbarbar.tech/api/htahta?apiKey=Q7MLdUnVSkXgLmQE9liX&text=${bh}`)
				itsmeiky.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'hartatata1':
				 // Update By RzkyO & ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(12)
				reply(ind.wait())
				bh = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${bh}&apikey=benbenz`)
				itsmeiky.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'hartatata2':
				 // Update By RzkyO & ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(12)
				reply(ind.wait())
				bh = await getBuffer(`https://api.vhtear.com/hartatahta?text=${bh}&apikey=Tebingtinggi123`)
				itsmeiky.sendMessage(from, bh, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
				await limitAdd(sender)
				break
		case 'text2gif':
				 // Update By RzkyO & ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(10)
				reply(ind.wait())
				bh = await getBuffer(`https://api.vhtear.com/textxgif?text=${bh}&apikey=Tebingtinggi123`)
				itsmeiky.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
				await limitAdd(sender)
				break
        case 'wanted':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(ind.wait())
	  owgi = await itsmeiky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	 itsmeiky.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'gtav':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(ind.wait())
	  owgi = await itsmeiky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	 itsmeiky.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'facebookpage':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(ind.wait())
	  owgi = await itsmeiky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 itsmeiky.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(ind.wait())
	  owgi = await itsmeiky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 itsmeiky.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(ind.wait())
	  owgi = await itsmeiky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 itsmeiky.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pencil':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(ind.wait())
	  owgi = await itsmeiky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 itsmeiky.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(ind.wait())
	  owgi = await itsmeiky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 itsmeiky.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(ind.wait())
	  owgi = await itsmeiky.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 itsmeiky.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
        case 'ttp':
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				ct = body.slice(5)
				ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text`)
				itsmeiky.sendMessage(from, ttp, MessageType.sticker, {quoted: iky})
				reply('Lagi Di Perbaiki Bug Nya')
				break
		case 'attp':
		        if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				itsmeiky.sendMessage(from, attp2, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
				break
        case 'spotify':
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=RamlanID&url=${url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Artists : ${get_result.artists}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Popularity : ${get_result.popularity}\n`
                    txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    itsmeiky.sendMessage(from, thumbnail, image, { quoted: iky, caption: txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    itsmeiky.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: iky })
                    break
                case 'spotifysearch':
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=RamlanID&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Artists : ${get_result[x].artists}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Preview : ${get_result[x].preview_url}\n\n\n`
                    }
                    reply(txt)
                    break
        case 'glitchtext':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					var gh = body.slice(12)
					var gli = gh.split("/")[0];
					var tch = gh.split("/")[1];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}glitchtext oks/Gans`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=apivinz`)
					itsmeiky.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					await limitAdd(sender)
				break
        case 'nature': // Update By RzkyO & ItsmeikyXSec404		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[sepertinya emror]`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev2?text=${ct}&theme=nature&apikey=onlyonedev`)
				buffer = await getBuffer(anu.result.url)
				itsmeiky.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
        case 'nature3d': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[sepertinya emror]`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev1?text=${ct}&theme=nature3d&apikey=onlyonedev`)
				buffer = await getBuffer(anu.result.url)
				itsmeiky.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
		case 'cblackpink':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(11)
				reply(ind.wait())
				bh = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/blackpink?apikey=WEMPYGANSS&text=${bh}`)
				itsmeiky.sendMessage(from, bh, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
				await limitAdd(sender)
				break
        case 'jooxplay':
                    query = args.join(" ")
                    reply(ind.wait())
                    get_result = await fetchJson(`http://api.vhtear.com/music?query=${query}&apikey=Tebingtinggi123`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.info.song}\n`
                    txt += `Artists : ${get_result.info.singer}\n`
                    txt += `Duration : ${get_result.info.duration}\n`
                    txt += `Album : ${get_result.info.album}\n`
                    txt += `Uploaded : ${get_result.info.date}\n`
                    txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    itsmeiky.sendMessage(from, thumbnail, image, { quoted: iky, caption: txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    itsmeiky.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: iky })
                    break
		case 'thunder':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bhaine = body.slice(9)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/thundertext?text=${bhaine}&apikey=apivinz`)
				buffer = await getBuffer(anu.result)
				itsmeiky.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
				await limitAdd(sender)
				break
		case 'imgmaker':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				ainez = body.slice(10)
				reply(ind.wait())
				anu = await fetchJson(`http://lolhuman.herokuapp.com/api/quotemaker?apikey=WEMPYGANSS&text=${ainez}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				itsmeiky.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
				await limitAdd(sender)
				break
		case 'calendermaker':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				ainez2 = body.slice(15)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/calendar?img=${ainez2}&apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				itsmeiky.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
				await limitAdd(sender)
				break
		case 'nekonime':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                        gatauda = body.slice(8)
					reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        itsmeiky.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					await limitAdd(sender)
                                        break
		case 'husbu':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(13)
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu2?apikey=BotWeA`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				itsmeiky.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
				await limitAdd(sender)
				break
		case 'shota':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
                case 'jokerlogo':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teks nya mana kak?')
				tels = body.slice(10)
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${tels}&apikey=BotWeA`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				itsmeiky.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
				await limitAdd(sender)
				break
                case 'anime':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(5)
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
                case 'slowmo':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await itsmeiky.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				itsmeiky.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: iky})
				fs.unlinkSync(ran)
				})
				break
                case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await onlydev.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						itsmeiky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: iky,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })
				       break
				case 'tupai':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await itsmeiky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						itsmeiky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: iky})
						fs.unlinkSync(ran)
					})
				break
				case 'gemok':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await itsmeiky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						itsmeiky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: iky})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await itsmeiky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						itsmeiky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: iky})
						fs.unlinkSync(ran)
					})
				break
                case 'neko':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
                 if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(4)
				reply(ind.wait())
				anu = await fetchJson(`https://alfians-api.herokuapp.com/api/nekonime`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
				case 'tolol': // Update By RzkyO & ItsmeikyXSec404
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teks nya mana ? titit ?')
				gatauda = body.slice(6)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=WEMPYGANSS&name=${gatauda}`, {method: 'get'})
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
				case 'emoji2img': // Update By RzkyO & ItsmeikyXSec404
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('emoji nya mana ? titit ?')
				gatauda = body.slice(11)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=benbenz&emoji=${gatauda}`, {method: 'get'})
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
                case 'memeindo':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
				case 'meme': // Update By RzkyO & ItsmeikyXSec404
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/random/meme?apikey=onlyonedev`)
				buffer = await getBuffer(anu.result.url)
				hasil = `➸ *Title* : ${anu.result.title}\n*➸ Author :* ${anu.result.author}\n*➸ Subreddit :* ${anu.result.subreddit}\n*➸ Post Link :* ${anu.result.post_link}`
				itsmeiky.sendMessage(from, buffer, image,  {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }, caption: hasil})
				break
				case 'darkjoke': // Update By RzkyO & ItsmeikyXSec404
				 // Fix Bug By RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=WEMPYGANSS`, {method: 'get'})
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky})
				await limitAdd(sender)
				break
		case 'randomkpop':
				gatauda = body.slice(10)
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih kpopnya kak...'})
				await limitAdd(sender)
				break
		case 'aesthetic':
				gatauda = body.slice(9)
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result.result)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih aestheticnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep': // Update By RzkyO & ItsmeikyXSec404 
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Maxim&text=${gatauda}&apikey=Tebingtinggi123`, {method: 'get'})
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep2': // Update By RzkyO & ItsmeikyXSec404 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alok&text=${gatauda}&apikey=Tebingtinggi123`, {method: 'get'})
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep3': // Update By RzkyO & ItsmeikyXSec404 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alvaro&text=${gatauda}&apikey=Tebingtinggi123`, {method: 'get'})
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep4': // Update By RzkyO & ItsmeikyXSec404 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Caroline&text=${gatauda}&apikey=Tebingtinggi123`, {method: 'get'})
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep5': // Update By RzkyO & ItsmeikyXSec404 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Kla&text=${gatauda}&apikey=Tebingtinggi123`, {method: 'get'})
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'gamelogo': // Update By RzkyO & ItsmeikyXSec404 
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/gamelogo?text=${gatauda}&apikey=Tebingtinggi123`, {method: 'get'})
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'pornlogo': // Update By RzkyO & ItsmeikyXSec404
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroup) return reply(ind.groupo())
					var gh = body.slice(10)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${gbl7}&text2=${gbl8}&apikey=Tebingtinggi123`, {method: 'get'})
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
                case 'joox':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
				if (data.error) return reply(data.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
				buffer = await getBuffer(data.result.thumb)
				lagu = await getBuffer(data.result.mp3)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: infomp3})
				itsmeiky.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: iky})
				await limitAdd(sender)
				break
		case 'play':   
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumbnail)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				itsmeiky.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: iky})
				await limitAdd(sender)
				break
		/*case 'play2':   
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				played = body.slice(6)
				anu = await fetchJson(`https://videfikri.com/api/ytplay/?query=${played}`)
				if (anu.error) return reply(anu.error)
				iinfomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.id}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumbnail)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: iinfomp3})
				laguu = await getBuffer(anu.result.url)
				itsmeiky.sendMessage(from, laguu , audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: iky})
				await limitAdd(sender)
				break*/
		case 'limit':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				checkLimit(sender)
				break
		case 'vinta':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				vin = body.slice(7)
				reply(ind.wait())
				vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
				itsmeiky.sendMessage(from, vintage, image, {caption: 'nih anjim ${vin}', quoted: iky})
				await limitAdd(sender)
				break
		case 'avengers':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				if (!q.includes('|')) return  reply(ind.wrongf())
				const aruga1 = q.substring(0, q.indexOf('|') - 0)
				const aruga2 = q.substring(q.lastIndexOf('|') + 1)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/avengers?text1=${aruga1}&text2=${aruga2}`)
				itsmeiky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break 
		case 'summer':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(8)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
				itsmeiky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break
		case 'sandwrite':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(11)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
				itsmeiky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break 
		case 'metaldark':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(11)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
				itsmeiky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break 
		case 'dropwater':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(11)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
				itsmeiky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break 
		case 'grenneon':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(10)
				reply(ind.wait())
				aruga = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/greenneon?apikey=WEMPYGANSS&text=LoLHuman${aruga}`)
				itsmeiky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break 
		case 'neontext':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(10)
				reply(ind.wait())
				aruga = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/neon?apikey=WEMPYGANSS&text=LoLHuman${aruga}`)
				itsmeiky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break 
		case 'toxic13':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(7)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/toxictext?text=${aruga}`)
				itsmeiky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break
		case 'sumery':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(8)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummery?text=${aruga}`)
				itsmeiky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break
		case 'blood':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(7)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/bloodtext?text=${aruga}`)
				itsmeiky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break
		case 'firework':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				arugazzz = body.slice(10)
				reply(ind.wait())
				arugazzz = await getBuffer(`https://arugaz.my.id/api/textpro/firework?text=${arugazzz}`)
				itsmeiky.sendMessage(from, arugazzz, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break
		case 'lava':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				aruga = body.slice(6)
				reply(ind.wait())
				aruga = await getBuffer(`https://arugaz.my.id/api/textpro/lavatext?text=${aruga}`)
				itsmeiky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: iky})
				await limitAdd(sender)
				break
                case '1cak':
				    try {
					     // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					    if (isLimit(sender)) return reply(ind.limitend(pusname))
					    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					    if (!isGroup) return reply(ind.groupo())
					    if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						buffer = await getBuffer(res.result)
						itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Nih Kak udah Jadi'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(ind.wrongf())
					}
					await limitAdd(sender)
					break
                case 'animequotes':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break	
                case 'twichquotes':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break	
                case 'faktaunik': // Fixed By ItsmeikyXSec404 & RzkyO
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/faktaunik?apikey=WEMPYGANSS`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break		
		case 'quotes':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.shizukaa.xyz/api/randomquote?apikey=itsmeiky633`)
					cop = `Quotes : _${data.quotes}_\n\nAuthor : _${data.author}_`
					reply(cop)
					await limitAdd(sender)
					break
		case 'covidindo': // Update By ItsmeikyXSec404 & RzkyO
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://videfikri.com/api/covidindo/`)
					hasil = `Positif : ${data.result.positif}\nSembuh : ${data.result.sembuh}\nMeninggal : ${data.result.meninggal}\nDirawat : ${data.result.dalam_perawatan}`
					reply(hasil)
					await limitAdd(sender)
					break		
		case 'covidglobal': // Update By ItsmeikyXSec404 & RzkyO   
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				itsmeiky.updatePresence(from, Presence.composing) 
			    tels = body.slice(12)
				asu = await fetchJson(`http://lolhuman.herokuapp.com/api/corona/global?apikey=WEMPYGANSS`)
				ez = `*╠➥  Positif :* ${asu.result.positif}\n*╠➥  Sembuh :* ${asu.result.sembuh}\n*╠➥  Di Rawat :* ${asu.result.dirawat}\n*╠➥  Meninggal :* ${asu.result.meninggal}\n`
				reply(ez)
				await limitAdd(sender)
					break
		case 'ceknamaff': // Update By ItsmeikyXSec404 & RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/freefire/${gatauda}?apikey=WEMPYGANSS`)
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'ceknamaml': // Update By ItsmeikyXSec404 & RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/mobilelegend/${gatauda}?apikey=WEMPYGANSS`)
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'namaninja': // Update By ItsmeikyXSec404 & RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=WEMPYGANSS&nama=${gatauda}`)
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'infonomor':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
					if (data.error) return reply(data.error)
					if (data.result) return reply(data.result)
					hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
					reply(hasil)
					await limitAdd(sender)
					break 
		case 'infogempa':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer= await getBuffer(anu.map)
					hasil = `*Potensi*\n${anu.potensi}\n*Lokasi*\n${anu.lokasi}\n*Magnitude*\n${anu.magnitude}\n*Koordinat*\n${anu.koordinat}\n*Kedalaman*\n${anu.kedalaman}\n*Waktu*\n${anu.waktu}\n*Map*\n${anu.map}`
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: hasil})
					await limitAdd(sender)
					break
		case 'infocuaca':
					tels = body.slice(11)
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cuaca?wilayah=${tels}&apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					hasil = `*Tempat* : ${anu.result.tempat}\n*Cuaca* : ${anu.result.cuaca}\n*Angin* : ${anu.result.angin}\n*Suhu* : ${anu.result.suhu}\n*Kelembapan* : ${anu.result.kelembapan}`
					itsmeiky.sendMessage(from, hasil, text, {quoted: iky})
					await limitAdd(sender)
					break
		case 'kurs': // Update By RzkyO & ItsmeikyXSec404
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.vhtear.com/kurs&apikey=Tebingtinggi123`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					hasil = `\n*==========*\n*USD Jual* : ${anu.result.Data.USD.Jual}\n*USD Beli* : ${anu.result.Data.USD.Beli}\n*==========*\n*SGD Jual* : ${anu.result.Data.SGD.Jual}\n*SGD Beli* : ${anu.result.Data.SGD.Beli}\n*==========*\n*EUR Jual* : ${anu.result.Data.EUR.Jual}\n*EUR Beli* : ${anu.result.Data.EUR.Beli}\n*==========*\n*AUD Jual* : ${anu.result.Data.AUD.Jual}\n*AUD Beli* : ${anu.result.Data.AUD.Beli}\n*==========*\n*DKK Jual* : ${anu.result.Data.DKK.Jual}\n*DKK Beli* : ${anu.result.Data.DKK.Beli}\n*==========*\n*SEK Jual* : ${anu.result.Data.SEK.Jual}\n*SEK Beli* : ${anu.result.Data.SEK.Beli}\n*==========*\n*CAD Jual* : ${anu.result.Data.CAD.Jual}\n*CAD Beli* : ${anu.result.Data.CAD.Beli}\n*==========*\n*CHF Jual* : ${anu.result.Data.CHF.Jual}\n*CHF Beli* : ${anu.result.Data.CHF.Beli}\n*==========*\n*NZD Jual* : ${anu.result.Data.NZD.Jual}\n*NZD Beli* : ${anu.result.Data.NZD.Beli}\n*==========*\n*GBP Jual* : ${anu.result.Data.GBP.Jual}\n*GBP Beli* : ${anu.result.Data.GBP.Beli}\n*==========*\n*HKD Jual* : ${anu.result.Data.HKD.Jual}\n*HKD Beli* : ${anu.result.Data.HKD.Beli}\n*==========*\n*JPY Jual* : ${anu.result.Data.JPY.Jual}\n*JPY Beli* : ${anu.result.Data.JPY.Beli}\n*==========*\n*SAR Jual* : ${anu.result.Data.SAR.Jual}\n*SAR Beli* : ${anu.result.Data.SAR.Beli}\n*==========*\n*CNH Jual* : ${anu.result.Data.CNH.Jual}\n*CNH Beli* : ${anu.result.Data.CNH.Beli}\n*==========*\n*MYR Jual* : ${anu.result.Data.MYR.Jual}\n*MYR Beli* : ${anu.result.Data.MYR.Beli}\n*==========*\n*THB Jual* : ${anu.result.Data.THB.Jual}\n*THB Beli* : ${anu.result.Data.THB.Beli}\n*==========*\n`
					itsmeiky.sendMessage(from, hasil, text, {quoted: iky})
					await limitAdd(sender)
					break
		case 'github': // Update By RzkyO & ItsmeikyXSec404
					tels = body.slice(8) 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/stalkgithub?apikey=itsmeiky633&user=${tels}`, {method: 'get'})
					buffer7 = await getBuffer(anu.avatar_url)
					if (anu.error) return reply(anu.error)
					capt = `*HASIL*\n\n*id* : ${anu.id}\n*node_id* : ${anu.node_id}\n*gravatar_id* : ${anu.gravatar_id}\n*html_url* : ${anu.html_url}\n*type* : ${anu.type}\n*site_admin* : ${anu.site_admin}\n*name* : ${anu.name}\n*company* : ${anu.company}\n*blog* : ${anu.blog}\n*location* : ${anu.location}\n*email* : ${anu.email}\n*bio* : ${anu.bio}\n*twitter_username* : ${anu.twitter_username}\n*public_repos* : ${anu.public_repos}\n*public_gists* : ${anu.public_gists}\n*followers* : ${anu.followers}\n*following* : ${anu.following}\n*created_at* : ${anu.created_at}\n*updated_at* : ${anu.updated_at}`
					itsmeiky.sendMessage(from, buffer7, image, {quoted: iky, caption: capt})
					await limitAdd(sender)
					break
                case 'slap':
					kapankah = body.slice(1)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','anjing lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak setan','puki lu','anjing ngajak gelud','sama hantu takut cupu bangsat','cupu cupu aja gausah bacot','bangsat lu semua','bocah lu semua bangsat','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					itsmeiky.sendMessage(from, pod, image, { quoted: iky, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
		case 'tampar':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						itsmeiky.sendMessage(from, buffer, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'tribunews':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			    case 'liputan6': // Update By RzkyO & ItsmeikyXSec404
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=benbenz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'foxnews': // Update By RzkyO & ItsmeikyXSec404
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=benbenz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'nickff': // Update By RzkyO & ItsmeikyXSec404
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=benbenz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'newsinfo': // Update By ItsmeikyXSec404 & RzkyO
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/newsinfo?apikey=WEMPYGANSS`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Source:* : ${i.source.name}\n*Author* : ${i.author}\n*Title* : ${i.title}\n*Description* : ${i.description}\n*Url* : ${i.url}\n*Published At* : ${i.publishedAt}\n*Content* : ${i.content}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film': // Update By RzkyO & ItsmeikyXSec404	
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=benbenz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film2': // Update By RzkyO & ItsmeikyXSec404	
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=benbenz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
                case 'beritahoax':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
		case 'trendtwit':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.vhtear.com/trendtwitter?country=indonesia&apikey=Tebingtinggi123`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
		case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					itsmeiky.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await itsmeiky.downloadAndSaveMediaMessage(enmedia)
					await itsmeiky.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
		case 'setppbott':
				if (!isAdmin) return reply('*Only Admin bot*')
					itsmeiky.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await itsmeiky.downloadAndSaveMediaMessage(enmedia)
					await itsmeiky.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
		case 'brainly':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					itsmeiky.sendMessage(from, teks, text, {quoted: iky, detectLinks: false})
					console.log(res)
					})
					await limitAdd(sender)
					break 
		case 'antidelete':
		    if (!isOwner) return reply(ind.ownerb())
		   if (!isOwner && !iky.key.fromMe) return itsmeiky.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*BENNYBOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
			const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return itsmeiky.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return itsmeiky.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke))
						reply(`*Succes Enable Antidelete Grup!*`)
					} else if (!isGroup) {
						itsmeiky.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return itsmeiky.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke))
						reply(`*Antidelete diaktifkan disemua kontak!*`)
					} else if (isGroup) {
						itsmeiky.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return itsmeiky.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return itsmeiky.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke))
					itsmeiky.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(from, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke))
						itsmeiky.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						itsmeiky.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke))
						reply(`*Antidelete dimatikan disemua kontak!*`)
					} else if (isGroup) {
						itsmeiky.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
		case 'bcgc':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers 
					tagss = iky.participant
					if (isMedia && !iky.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						buffer = await itsmeiky.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							itsmeiky.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
		case 'pinterest':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky, caption: `*PINTEREST*`})
					await limitAdd(sender)
					break 
           
           case 'waifu':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/waifu?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'randombts':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randombts?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'randomexo':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randomexo?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'blackpink':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/blackpink?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'imageislamic':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/wpislamic?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'imagecyberspace':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/wpcyberspace?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'imagegame':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/wpgame?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'loli':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randomloli?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'imagemountain':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/wpmountain?apikey=tsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
           case 'husbu':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/husbu?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky })
					await limitAdd(sender) 
					break
		   case 'mimpi':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			        reply(mess.wait)
			        anu = await fetchJson(`https://api.shizukaa.xyz/api/artimimpi?apikey=itsmeiky633&q=belanja`, {method: 'get'})
			        mimpi = `Arti Mimpi *${body.slice(7)}* Adalah:\n${anu.result}`
			        itsmeiky.sendMessage(from, mimpi, text, {quoted: iky })
			        await limitAdd(sender) 
			    	break
		     case 'fakta':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/fakta?apikey=itsmeiky633`, {method: 'get'})
					fakta = `Faktanya: *${anu.result}*`
					itsmeiky.sendMessage(from, fakta, text, {quoted: iky })
					await limitAdd(sender) 
					break 
				case 'katabijak':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bijak?apikey=itsmeiky633`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.result}*`
					itsmeiky.sendMessage(from, katabijak, text, {quoted: iky })
					await limitAdd(sender) 
					break
			case 'katailham':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanilham?apikey=itsmeiky633`, {method: 'get'})
				kata = anu.result
				itsmeiky.sendMessage(from, kata, text, {quoted: iky })
				await limitAdd(sender)
				break
				case 'caklontong':
			         // Fix Bug By ItsmeikyXSec404				
                 anu = await fetchJson(`https://hans-apikey.herokuapp.com/api/kuis/caklontong?apikey=hansdev`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					itsmeiky.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+ '\n\n• Penjelasan: *'+ anu.result.desk+'*', text, {quoted: iky}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					itsmeiky.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					itsmeiky.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					itsmeiky.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					itsmeiky.sendMessage(from, caklontong, text, {quoted: iky}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
		         case 'babi':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                 const gshizuka = await itsmeiky.getGroupMembersId(groupId)
                 let gmik = gshizuka[Math.floor(Math.random() * gshizuka.length)]
                 const mmkk = `YANG PALING BABI DISINI ADALAH @${gmik.replace(/@c.us/g, '')}`
                 itsmeiky.sendTextWithMentions(dari, mmkk, id)
                 break
				case 'tebakgambar':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/tebakgambar?apikey=itsmeiky633`, {method: 'get'})
					bufferkkk = await getBuffer(anu.img_url)
					setTimeout( () => {
					itsmeiky.sendMessage(from, '*Jawaban :* '+anu.jawaban, text, {quoted: iky }) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					itsmeiky.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					itsmeiky.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					itsmeiky.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					itsmeiky.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: iky }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break  
					case 'family100':
                
		
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=Tebingtinggi123`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					itsmeiky.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: iky}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					itsmeiky.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					itsmeiky.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					itsmeiky.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					itsmeiky.sendMessage(from, family, text, {quoted: iky }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
		case 'spamcall':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://api.shizukaa.xyz/api/spamcall?apikey=itsmeiky633&nohp=${call}`, {method: 'get'})
			itsmeiky.sendMessage(from, `${anu.result.logs}`, text, {quoted: iky })
			await limitAdd(sender) 
			break  
				case 'wiki':
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('teks nya mana om?')
                reply(mess.wait)
                wiki = `${body.slice(6)}`
                anu = await fetchJson(`https://api.shizukaa.xyz/api/wiki?apikey=itsmeiky633&q=${wiki}`, {method: 'get'})
                if (anu.error) return reply(anu.error)
                wikii = `${anu.result}`
                itsmeiky.sendMessage(from, wikii, text, {quoted: iky })
                await limitAdd(sender) 
                break
               case 'asupan': // Update By RzkyO & ItsmeikyXSec404
               if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				reply(`[Sambar Ya Jones]`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupan?apikey=onlyonedev`, {method: 'get'})
				buff = await getBuffer(anu.result.url)
				itsmeiky.sendMessage(from, buff, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
				break
               case 'ytmp4':
                   if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=RamlanID&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Description :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    itsmeiky.sendMessage(from, buffer, image, { quoted: iky, caption: txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    itsmeiky.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: iky })
                    break 
                    case 'ytsearch':
					if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					query = args.join(" ")
					anu = await fetchJson(`http://api.vhtear.com/youtube?query=${query}&apikey=Tebingtinggi123`, {method: 'get'})
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : https://youtu.be/${i.videoId}\n*Published* : ${i.published}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
			case 'ytmp3':
			         // Fix Bug By ItsmeikyXSec404	
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isPremium) return reply('Maaf kamu bukan user premium!')			
                 reply(ind.wait)
                anu = await fetchJson(`https://st4rz.herokuapp.com/api/yta2?url=${body.slice(7)}`)
                if (anu.error) return reply(anu.error)
                ingfomp3 = `*Lagu Ditemukan*\n➸ Judul : ${anu.title}\n*Proses*`
                buffer = await getBuffer(anu.thumb)
                lagu = await getBuffer(anu.result)
                itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: ingfomp3})
                itsmeiky.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: iky})
                break
			 case 'nsfwloli':
				    try {
			         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://api.shizukaa.xyz/api/neko?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.neko)
						itsmeiky.sendMessage(from, buffer, image, {quoted: shizuka, caption: 'Jangan jadiin bahan buat comli om'})
					    } catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					    }
					    await limitAdd(sender)
					    break
		case 'hilih': 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://api.zeks.xyz/api/hilihmaker?text=${body.slice(7)}&apikey=apivinz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'holoh': // Update By ItsmeikyXSec404 & RzkyO
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=o&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'halah': // Update By ItsmeikyXSec404 & RzkyO
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=a&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'huluh': // Update By ItsmeikyXSec404 & RzkyO
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=u&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'heleh': // Update By ItsmeikyXSec404 & RzkyO
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=e&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'hurufterbalik': // Update By ItsmeikyXSec404 & RzkyO
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					gatauda = body.slice(14)
					anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${gatauda}`, {method: 'get'})
					reply(anu.result.kata)
					await limitAdd(sender)
					break
		case 'lirik': // Update By ItsmeikyXSec404 & RzkyO
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					teks = body.slice(6)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/lirik?q=${teks}&apikey=BotWeA`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender)
					break
		case 'alay':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					data = await fetchJson(`https://api.zeks.xyz/api/alaymaker?kata=${body.slice(6)}&apikey=apivinz`)
					reply(data.result)
				        await limitAdd(sender)
					break
		case 'alay2': // Update By ItsmeikyXSec404 & RzkyO
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/upperlower?apikey=WEMPYGANSS&text=${body.slice(6)}`)
					reply(data.result)
				        await limitAdd(sender)
					break
		case 'fml':	// Fixed By ItsmeikyXSec404 & RzkyO
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/randomfmylife?apikey=BotWeA`)
					hasil = data.result
					reply(hasil)
					await limitAdd(sender)
					break	
		case 'chord':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Judul lagunya mana kak')
					tels = body.slice(7)					
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${tels}&apikey=BotWeA`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katacinta':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'pantun':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					await limitAdd(sender)
					break
		case 'cersex': // Update By RzkyO & ItsmeikyXSec404
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=Tebingtinggi123`, {method: 'get'})
					reply(anu.result.cerita)
					await limitAdd(sender)
					break
		case 'jadwaltv':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(10)					
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${gatauda}&apikey=benbenz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katadilan': // Update By ItsmeikyXSec404 & RzkyO
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotandilan?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin': // Update By ItsmeikyXSec404 & RzkyO
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin2': // Update By ItsmeikyXSec404 & RzkyO
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'cerpen': // Update By ItsmeikyXSec404 & RzkyO
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/cerpen?apikey=WEMPYGANSS`, {method: 'get'})
					reply(anu.result.cerpen)
					await limitAdd(sender)
					break
		case 'quotes': // Update By ItsmeikyXSec404 & RzkyO
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/quotes?apikey=WEMPYGANSS`, {method: 'get'})
					reply(anu.result.quote)
					await limitAdd(sender)
					break
		case 'bacotanhacker': // Update By ItsmeikyXSec404 & RzkyO
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanhacker?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'quotedoraemon': // Update By ItsmeikyXSec404 & RzkyO
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/quotedoraemon?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result.quote)
					await limitAdd(sender)
					break
		case 'resepmasakan':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.thumb_item)
					hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: hasil})
					await limitAdd(sender)
					break 
		case 'igstalk':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hmm = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${body.slice(9)}&apikey=apivinz`)
					buffer = await getBuffer(hmm.profile_pic)
					hasil = `Fullname : ${hmm.fullname}\nPengikut : ${hmm.follower}\nMengikuti : ${hmm.following}\nPrivate : ${hmm.is_private}\nVerified : ${hmm.is_verified}\nbio : ${hmm.bio}`
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: hasil})
					await limitAdd(sender)
					break
		case 'infofilm': // Update By ItsmeikyXSec404 & RzkyO
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ige = body.slice(10)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/film2?q=${ige}&apikey=BotWeA`)
					buffer7 = await getBuffer(anu.result.thumbnail)
					capt = `➸ Judul : ${anu.result.judul}\n*➸ Bahasa :* ${anu.result.bahasa}\n*➸ Negara :* ${anu.result.negara}\n*➸ Aktor :* ${anu.result.aktor}\n*➸ Boxoffice :* ${anu.result.boxoffice}\n*➸ Dirilis :* ${anu.result.dirilis}\n*➸ Durasi :* ${anu.result.durasi}\n*➸ Katagori :* ${anu.result.kategori}\n*➸ Metascore :* ${anu.result.metascore}\n*➸ Vote :* ${anu.result.voting_imdb}\n*➸ Negara :* ${anu.result.negara}\n*➸ Sinopsis :* ${anu.result.sinopsis}\n*➸ Penghargaan :* ${anu.result.penghargaan}`
					itsmeiky.sendMessage(from, buffer7, image, {quoted: iky, caption: capt})
					await limitAdd(sender)
					break
		case 'infofilm2': // Update By RzkyO & ItsmeikyXSec404
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ige = body.slice(10)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/lk21?apikey=WEMPYGANSS&query=${ige}`)
					buffer7 = await getBuffer(anu.result.thumbnail)
					capt = `➸ Nama Film : ${anu.result.title}\n*➸ Link :* ${anu.result.link}\n*➸ Genre :* ${anu.result.genre}\n*➸ Views :* ${anu.result.views}\n*➸ Durasi :* ${anu.result.duration}\n*➸ Dirilis :* ${anu.result.tahun}\n*➸ Rating :* ${anu.result.rating}\n*➸ Description :* ${anu.result.desc}\n*➸ Aktor :* ${anu.result.actors}\n*➸ Location :* ${anu.result.location}\n*➸ Date Release :* ${anu.result.date_release}\n*➸ Language :* ${anu.result.language}\n*➸ Link Download :* ${anu.result.link_dl}`
					itsmeiky.sendMessage(from, buffer7, image, {quoted: iky, caption: capt})
					await limitAdd(sender)
					break
		case 'heroml':  // Update By RzkyO & ItsmeikyXSec404
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(`_Please wait_`)
				ige = body.slice(8)
				anu = await fetchJson(`http://api.hurtzcrafter.xyz/herodetail?hero=${ige}`) 
				buffer7 = await getBuffer(anu.result.image)
				teks = `Hasil\n*Hero Name*: ${anu.result.hero_name}\n*Quotes Hero*: ${anu.result.entrance_quotes}\n*Hero Feature*: ${anu.result.hero_feature}\n*Items*: ${anu.result.items}\n*Character*: ${anu.result.character.chara}\n*Movement Speed*: ${anu.result.attributes.movement_speed}\n*Physical Attack*: ${anu.result.attributes.physical_attack}\n*Magic Power*: ${anu.result.attributes.magic_power}\n*Attack Speed*: ${anu.result.attributes.attack_speed}\n*Physical Defense*: ${anu.result.attributes.physical_defense}\n*Basic Atk Crit Rate*: ${anu.result.attributes.basic_atk_crit_rate}\n*HP*: ${anu.result.attributes.hp}\n*Mana*: ${anu.result.attributes.mana}\n*ability_crit_rate*: ${anu.result.attributes.ability_crit_rate}\n*hp_regen*: ${anu.result.attributes.hp_regen}\n*mana_regen*: ${anu.result.attributes.mana_regen}\n*Price Hero BP*: ${anu.result.price.battle_point}\n*Price Hero DM*: ${anu.result.price.diamond}\n*Price Hero FRAG*: ${anu.result.price.hero_fragment}\n*Role*: ${anu.result.role}\n*Durability*: ${anu.result.skill.durability}\n*offense*: ${anu.result.skill.offense}\n*skill_effects*: ${anu.result.skill.skill_effects}\n*difficulty*: ${anu.result.skill.difficulty}\n*speciality*: ${anu.result.speciality}\n*laning_recommendation*: ${anu.result.laning_recommendation}\n*release_date*: ${anu.result.release_date}`
				itsmeiky.sendMessage(from, buffer7, image, {quoted: iky, caption: teks})
				await limitAdd(sender)
				break
				case 'igvideo': // Update By ItsmeikyXSec404 & RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana tong?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(9)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    itsmeiky.sendMessage(from, buffer, video, )
				    break
				case 'igpost': // Update By ItsmeikyXSec404 & RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana tong?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(8)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    itsmeiky.sendMessage(from, buffer, image, )
				    break
				case 'igtv': // Update By ItsmeikyXSec404 & RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana tong?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(6)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    itsmeiky.sendMessage(from, buffer, video, )
				    break
				case 'tiktoknowm': // Update By RzkyO & ItsmeikyXSec404
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana tong?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					 ige = body.slice(12)
                     anu = await fetchJson(`http://api.vhtear.com/tiktokdl?link=${args[0]}&apikey=Tebingtinggi123`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.link)
                    itsmeiky.sendMessage(from, buffer, video, )
				    break
				 case 'ccgenerator': // Update By RzkyO & ItsmeikyXSec404
					if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                   reply(`__Please wait__`)
				   anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`, {method:'get'})
				   teks = `*Hasil CCGenerator*\n*♻️NUMBER*: ${anu.result.card.number}\n*♻️TYPE*: ${anu.result.card.network}\n*♻️CVV*: ${anu.result.card.cvv}\n*♻️PIN*: ${anu.result.card.pin}\n*♻️MONEY*: ${anu.result.card.balance}\n*♻️EXPIRE-MONTH*: *Custom*\n*♻️EXPIRE-YEAR*: *Custume*\n*♻️COUTRY*: ${anu.result.customer.country}\n*♻️NAME*: ${anu.result.customer.name}\n*♻️ADDRESS*: ${anu.result.customer.address}`
				   itsmeiky.sendMessage(from, teks, text, {quoted: iky})
				   await limitAdd(sender)
				   break
				 case 'ceritahorror': // Update By RzkyO & ItsmeikyXSec404
					if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                   reply(`__Please wait__`)
				   anu = await fetchJson(`https://naufalhoster.xyz/tools/story_horror?apikey=IgygEb-7vT4iB-h2zOyi`, {method:'get'})
				   teks = `*Hasil Cerita*\n*Nama Cerita*: ${anu.result.title}\n*Cerita*: ${anu.result.story}`
				   itsmeiky.sendMessage(from, teks, text, {quoted: iky})
				   await limitAdd(sender)
				   break
					/*
                case 'kickall':
					if (!isOwner) return reply(ind.ownerb())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					itsmeiky.groupRemove(from, members_id)
					break*/
		case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
					itsmeiky.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'setreplyy':
				if (!isAdmin) return reply('*Only Admin bot*')
					itsmeiky.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'grouplist':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					itsmeiky.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					itsmeiky.sendMessage(from, teks.trim(), extendedText, {quoted: iky})
					break
         case 'takestick': // By: VideFrelan
            case 'take':
                if (!q.includes('|')) return  reply(ind.wrongf())
                if (quotedMsg && quotedMsg.type == 'sticker') {
                    const mediaDataTake = await decryptMedia(quotedMsg, uaOverride)
                    const packname = q.substring(0, q.indexOf('|') - 1)
                    const author = q.substring(q.lastIndexOf('|') + 2)
                    exif.create(packname, author, `takestick_${sender.id}`)
                    webp.buffer2webpbuffer(mediaDataTake, 'jpg', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512)
                                .toFile(`./temp/takestickstage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/takestick_${sender.id}.exif ./temp/takestickstage_${sender.id}.webp -o ./temp/takestick_${sender.id}.webp`, { log: false })
                                    if (fs.existsSync(`./temp/takestick_${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/takestick_${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await itsmeiky.sendRawWebpAsSticker(from, base64)
                                        //console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                        fs.unlinkSync(`./temp/takestick_${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/takestickstage_${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/takestick_${sender.id}.exif`)
                                    }
                                })
                        })
                } else {
                    await itsmeiky.reply(from, `Format salah pastikan sudah benar di ${prefix}menu`)
                }
            break
         case 'getsticker':
				case 'gets':  // Fix Bug By PojanGanz
				
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					itsmeiky.sendMessage(from, result, sticker, {quoted :iky})
					break
				case 'stickerlist':
				case 'liststicker':  // Fix Bug By PojanGanz
				
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					itsmeiky.sendMessage(from, teks.trim(), extendedText, { quoted: iky, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':  // Fix Bug By PojanGanz
				
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await itsmeiky.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					itsmeiky.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: iky })
					break
				case 'addvn':  // Fix Bug By PojanGanz
				
					if (!isQuotedAudio) return reply('Reply vnnya blokk!')
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa su?')
					boij = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await itsmeiky.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					itsmeiky.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: iky })
					break
				case 'getvn':  // Fix Bug By PojanGanz
				
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					itsmeiky.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: iky, ptt: true })
					break
				case 'listvn':
				case 'vnlist':  // Fix Bug By PojanGanz
				
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					itsmeiky.sendMessage(from, teks.trim(), extendedText, { quoted: iky, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimage':  // Fix Bug By PojanGanz
				
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await itsmeiky.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					itsmeiky.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: iky })
					break
				case 'getimage':  // Fix Bug By PojanGanz
				
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					itsmeiky.sendMessage(from, buffer, image, { quoted: iky, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagelist':
				case 'listimage':  // Fix Bug By PojanGanz
				
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					itsmeiky.sendMessage(from, teks.trim(), extendedText, { quoted: iky, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':  // Fix Bug By PojanGanz
				
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await itsmeiky.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					itsmeiky.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: iky })
					break
				case 'getvideo':  // Fix Bug By PojanGanz
				
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					itsmeiky.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: iky })
					break
				case 'listvideo':
				case 'videolist':  // Fix Bug By PojanGanz
				
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					itsmeiky.sendMessage(from, teks.trim(), extendedText, { quoted: iky, contextInfo: { "mentionedJid": videonye } })
					break
		//daftar
		case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                			if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                					try {
								ppimg = await itsmeiky.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await itsmeiky.sendMessage(from, ppimg, image, {quoted: iky, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await itsmeiky.sendMessage(from, ppimg, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break
		case 'mining':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
		case 'bisakah':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					itsmeiky.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'kapankah':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					itsmeiky.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'apakah':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					itsmeiky.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'bagaimanakah':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					itsmeiky.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'rate':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					itsmeiky.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: iky })
					await limitAdd(sender)
					break
                case 'sangecek':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					itsmeiky.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: iky })
					await limitAdd(sender)
					break
                case 'gaycek':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					itsmeiky.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: iky })
					await limitAdd(sender)
					break
                case 'lesbicek':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					itsmeiky.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: iky })
					await limitAdd(sender)
					break
                case 'gantengcek':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					itsmeiky.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'cantikcek':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					itsmeiky.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'watak':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					itsmeiky.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: iky })
					await limitAdd(sender)
				        break
		case 'hobby':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					itsmeiky.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: iky })
					await limitAdd(sender)
					break
		case 'speed5':
		case 'ping3':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					await itsmeiky.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
		//case 'help': 
		case 'menu':
//anjing INFO DEVELOPER jangan di ganti bangsat!!
//cuma numpang nama doang lu !!
//kalau INFO DEVELOPER ga di ganti gw ikhlas !!
//---------------------------
//Fuck dont change INFO DEVELOPER !!
//You only get your name fuck !!
//If INFO DEVELOPER not in change, its okey!!
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
					var premma = isPremium
                    var found = false
                    wew = fs.readFileSync(`./src/logo.jpg`)
                    shiz = ` ◪ *INFO DEVELOPER*
•   *「Note」: Fitur kick dan add di nonaktifin owner karena rawan Ban*
•   *「Wa Grup Official」 : https://chat.whatsapp.com/DulBXyjiyK2K85IzhzjaxK*
   
❖ Nama: Marcel & Raditya
❖ Wa: wa.me/6285372906349 (own 1)
❖ Wa: wa.me/12562120001 (own 2)
❖ Ig: https://instagram.com/celstm_11
❖ Ig: https://instagram.com/rdtyasaha_
 ⍟─────────────────⍟
◪ *✿𝙄𝙉𝙁𝙊 𝘽𝙊𝙏✿*
❖\`\`\`Nama: Bot\`\`\`
❖\`\`\`Browser : ${itsmeiky.browserDescription[1]}\`\`\`
❖\`\`\`Server : ${itsmeiky.browserDescription[0]}\`\`\`
❖\`\`\`Version : ${itsmeiky.browserDescription[2]}\`\`\`
❖\`\`\`Speed : ${process.uptime()}\`\`\`
❖\`\`\`Handphone : ${itsmeiky.user.phone.device_manufacturer}\`\`\`
❖\`\`\`Versi Whatsapp : ${itsmeiky.user.phone.wa_version}\`\`\`
  ⍟─────────────────⍟
◪ *✿𝙔𝙊𝙐𝙍 𝙄𝙉𝙁𝙊✿*
❖ \`\`\`Prefix: 「  Multi  」\`\`\`
❖ \`\`\`Nama: ${pushname}\`\`\`
❖ \`\`\`Uang mu : Rp${uangku}\`\`\`
❖ \`\`\`Nomer: ${sender.split("@")[0]}\`\`\`
❖ \`\`\`XP: ${getLevelingXp(sender)}/${reqXp}\`\`\`
❖ \`\`\`Status : ${premma ? 'Premium' : 'Gratisan 👎'}\`\`\`
❖ \`\`\`Level: ${getLevelingLevel(sender)}\`\`\`
❖ \`\`\`User register : ${_registered.length}\`\`\`
  
  ⍟─────────────────⍟
  
╭──── *✿ 𝘼𝘽𝙊𝙐𝙏 ✿* ────
│ ❖ \`\`\`${prefix}info\`\`\`
│ ❖ \`\`\`${prefix}snk\`\`\`
│ ❖ \`\`\`${prefix}lpr\`\`\`
│ ❖ \`\`\`${prefix}request\`\`\`
│ ❖ \`\`\`${prefix}blocklist\`\`\`
│ ❖ \`\`\`${prefix}ping\`\`\`
│ ❖ \`\`\`${prefix}buypremium\`\`\`
│ ❖ \`\`\`${prefix}hargaprem\`\`\`
│ ❖ \`\`\`${prefix}menupict\`\`\`
│ ❖ \`\`\`${prefix}menuowner\`\`\`
│ ❖ \`\`\`${prefix}celgrup\`\`\`

╭──── *✿𝙈𝙀𝙉𝙐✿* ────  
│ ❖ \`\`\`${prefix}nsfwloli\`\`\`
│ ❖ \`\`\`${prefix}wiki\`\`\`
│ ❖ \`\`\`${prefix}spamcall\`\`\`
│ ❖ \`\`\`${prefix}tebakgambar\`\`\`
│ ❖ \`\`\`${prefix}babi\`\`\`
│ ❖ \`\`\`${prefix}caklontong\`\`\`
│ ❖ \`\`\`${prefix}katailham\`\`\`
│ ❖ \`\`\`${prefix}katabijak\`\`\`
│ ❖ \`\`\`${prefix}fakta\`\`\`
│ ❖ \`\`\`${prefix}mimpi\`\`\`
│ ❖ \`\`\`${prefix}husbu\`\`\`
│ ❖ \`\`\`${prefix}imagemountain\`\`\`
│ ❖ \`\`\`${prefix}imagegame\`\`\`
│ ❖ \`\`\`${prefix}imagecyberspace\`\`\`
│ ❖ \`\`\`${prefix}imageislamic\`\`\`
│ ❖ \`\`\`${prefix}blackpink\`\`\`
│ ❖ \`\`\`${prefix}randomexo\`\`\`
│ ❖ \`\`\`${prefix}randombts\`\`\`
│ ❖ \`\`\`${prefix}menuownerwaifu\`\`\`
│ ❖ \`\`\`${prefix}1cak\`\`\`

╭──── *✿𝙈𝘼𝙆𝙀𝙍✿* ────
│ ❖ \`\`\`${prefix}nulis2\`\`\`
│ ❖ \`\`\`${prefix}nulis3\`\`\`
│ ❖ \`\`\`${prefix}nulis4\`\`\`
│ ❖ \`\`\`${prefix}sticker\`\`\`
│ ❖ \`\`\`${prefix}summer\`\`\`
│ ❖ \`\`\`${prefix}toimg\`\`\`
│ ❖ \`\`\`${prefix}hartatata1\`\`\`
│ ❖ \`\`\`${prefix}hartatata2\`\`\`
│ ❖ \`\`\`${prefix}text2gif\`\`\`
│ ❖ \`\`\`${prefix}quotemaker\`\`\`
│ ❖ \`\`\`${prefix}galaxtext\`\`\`
│ ❖ \`\`\`${prefix}pupycut\`\`\`
│ ❖ \`\`\`${prefix}galaxstyle\`\`\`
│ ❖ \`\`\`${prefix}hologram\`\`\`
│ ❖ \`\`\`${prefix}textbyname\`\`\`
│ ❖ \`\`\`${prefix}herrypoter\`\`\`
│ ❖ \`\`\`${prefix}greanneon\`\`\`
│ ❖ \`\`\`${prefix}glitchtext\`\`\`
│ ❖ \`\`\`${prefix}logoepep\`\`\`
│ ❖ \`\`\`${prefix}logoepep2\`\`\`
│ ❖ \`\`\`${prefix}logoepep3\`\`\`
│ ❖ \`\`\`${prefix}logoepep4\`\`\`
│ ❖ \`\`\`${prefix}logoepep5\`\`\`
│ ❖ \`\`\`${prefix}gamelogo\`\`\`
│ ❖ \`\`\`${prefix}pornlogo\`\`\`
│ ❖ \`\`\`${prefix}metallogo\`\`\`
│ ❖ \`\`\`${prefix}nature\`\`\`
│ ❖ \`\`\`${prefix}nature3d\`\`\`

╭──── *✿𝗦𝗘𝗥𝗧𝗜✿────
│ ❖ \`\`\`${prefix}anakharam\`\`\`
│ ❖ \`\`\`${prefix}babu\`\`\`
│ ❖ \`\`\`${prefix}bucinserti\`\`\`
│ ❖ \`\`\`${prefix}bocilepep\`\`\`
│ ❖ \`\`\`${prefix}gayserti\`\`\`
│ ❖ \`\`\`${prefix}pacar\`\`\`
│ ❖ \`\`\`${prefix}sadboy\`\`\`
│ ❖ \`\`\`${prefix}surga\`\`\`
│ ❖ \`\`\`${prefix}pintar\`\`\`
│ ❖ \`\`\`${prefix}badboy\`\`\`
│ ❖ \`\`\`${prefix}badgirl\`\`\`
│ ❖ \`\`\`${prefix}goodboy\`\`\`
│ ❖ \`\`\`${prefix}goodgirl\`\`\`
│ ❖ \`\`\`${prefix}editorberkelas\`\`\`
│ ❖ \`\`\`${prefix}goodlooking\`\`\`
│ ❖ \`\`\`${prefix}fucekboy\`\`\`
│ ❖ \`\`\`${prefix}jamet\`\`\`
│ ❖ \`\`\`${prefix}heker\`\`\`
│ ❖ \`\`\`${prefix}fftourserti\`\`\`
│ ❖ \`\`\`${prefix}fftourserti2\`\`\`
│ ❖ \`\`\`${prefix}fftourserti3\`\`\`
│ ❖ \`\`\`${prefix}fftourserti4\`\`\`
│ ❖ \`\`\`${prefix}fftourserti5\`\`\`
│ ❖ \`\`\`${prefix}pubgtourserti\`\`\`
│ ❖ \`\`\`${prefix}pubgtourserti2\`\`\`
│ ❖ \`\`\`${prefix}pubgtourserti3\`\`\`
│ ❖ \`\`\`${prefix}pubgtourserti4\`\`\`
│ ❖ \`\`\`${prefix}pubgtourserti5\`\`\`
│ ❖ \`\`\`${prefix}mltourserti\`\`\`
│ ❖ \`\`\`${prefix}mltourserti2\`\`\`
│ ❖ \`\`\`${prefix}mltourserti3\`\`\`
│ ❖ \`\`\`${prefix}mltourserti4\`\`\`
│ ❖ \`\`\`${prefix}mltourserti5\`\`\`
│ ❖ \`\`\`${prefix}tweetfake\`\`\`
  
╭──── *✿𝙊𝙏𝙃𝙀𝙍 𝙁𝙄𝙏𝙐𝙍✿* ────
│ ❖ \`\`\`${prefix}ssweb\`\`\`
│ ❖ \`\`\`${prefix}hilih\`\`\`  [teks]
│ ❖ \`\`\`${prefix}alay\`\`\`  [teks]
│ ❖ \`\`\`${prefix}say\`\`\`  [teks]
│ ❖ \`\`\`${prefix}wiki\`\`\`  [teks]
│ ❖ \`\`\`${prefix}kbbi\`\`\`  [teks]
│ ❖ \`\`\`${prefix}map\`\`\`  [teks]
│ ❖ \`\`\`${prefix}kalkulator\`\`\`
│ ❖ \`\`\`${prefix}lirik\`\`\`  [teks]
│ ❖ \`\`\`${prefix}brainly\`\`\`  [teks]
│ ❖ \`\`\`${prefix}meme\`\`\`
│ ❖ \`\`\`${prefix}chord\`\`\`  [teks]
│ ❖ \`\`\`${prefix}katabijak \`\`\`
│ ❖ \`\`\`${prefix}faktaunik \`\`\`
│ ❖ \`\`\`${prefix}coronainfo\`\`\`
│ ❖ \`\`\`${prefix}holoh\`\`\`
│ ❖ \`\`\`${prefix}halah\`\`\`
│ ❖ \`\`\`${prefix}huluh\`\`\`
│ ❖ \`\`\`${prefix}heleh\`\`\`
│ ❖ \`\`\`${prefix}hurufterbalik\`\`\`
│ ❖ \`\`\`${prefix}lirik\`\`\`
│ ❖ \`\`\`${prefix}alay2\`\`\`
│ ❖ \`\`\`${prefix}katadilan\`\`\`
│ ❖ \`\`\`${prefix}katabucin\`\`\`
│ ❖ \`\`\`${prefix}katabucin2\`\`\`
│ ❖ \`\`\`${prefix}cerpen\`\`\`
│ ❖ \`\`\`${prefix}quotes\`\`\`
│ ❖ \`\`\`${prefix}bacotanhacker\`\`\`
│ ❖ \`\`\`${prefix}igvideo\`\`\`
│ ❖ \`\`\`${prefix}pantun\`\`\`
│ ❖ \`\`\`${prefix}artinama\`\`\` [teks]
  
╭─── *✿𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉✿* ───
│ ❖ \`\`\`${prefix}bahasa\`\`\`
│ ❖ \`\`\`${prefix}kodenegara\`\`\`
│ ❖ \`\`\`${prefix}infogempa\`\`\`
│ ❖ \`\`\`${prefix}infocuaca\`\`\`
│ ❖ \`\`\`${prefix}infonomor\`\`\`
│ ❖ \`\`\`${prefix}covidindo\`\`\`
│ ❖ \`\`\`${prefix}covidglobal\`\`\`
│ ❖ \`\`\`${prefix}ceknamaff\`\`\`
│ ❖ \`\`\`${prefix}namaninja\`\`\`
│ ❖ \`\`\`${prefix}newsinfo\`\`\`
│ ❖ \`\`\`${prefix}tribunews\`\`\`
│ ❖ \`\`\`${prefix}tiktokstalk\`\`\`
│ ❖ \`\`\`${prefix}igstalk\`\`\`
│ ❖ \`\`\`${prefix}liputan6\`\`\`
│ ❖ \`\`\`${prefix}jadwalbola\`\`\`
│ ❖ \`\`\`${prefix}film2\`\`\`
│ ❖ \`\`\`${prefix}film\`\`\`
│ ❖ \`\`\`${prefix}newsinfo\`\`\`
│ ❖ \`\`\`${prefix}coronainfo\`\`\`
│ ❖ \`\`\`${prefix}ceritahorror\`\`\`
│ ❖ \`\`\`${prefix}infofilm2\`\`\`
  
╭─── *✿𝙆𝙀𝙍𝘼𝙉𝙂 𝘼𝙅𝘼𝙄𝘽✿* ───
│ ❖\`\`\`${prefix}gantengcek\`\`\`
│ ❖\`\`\`${prefix}cantikcek\`\`\`
│ ❖\`\`\`${prefix}sangecek\`\`\`
│ ❖\`\`\`${prefix}gaycek\`\`\`
│ ❖\`\`\`${prefix}lesbicek\`\`\`
│ ❖\`\`\`${prefix}watak\`\`\`
│ ❖\`\`\`${prefix}hobby\`\`\`
│ ❖\`\`\`${prefix}apakah\`\`\`
│ ❖\`\`\`${prefix}kapankah\`\`\`
│ ❖\`\`\`${prefix}bisakah\`\`\`
│ ❖\`\`\`${prefix}bagaimanakah\`\`\`
│ ❖\`\`\`${prefix}rate\`\`\`

╭─── *✿𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍✿* ───  
│ ❖ \`\`\`${prefix}pinterest\`\`\` [teks]
│ ❖ \`\`\`${prefix}ytmp3\`\`\` [link]
│ ❖ \`\`\`${prefix}ytmp4\`\`\` [link]
│ ❖ \`\`\`${prefix}tiktoknowm\`\`\` [link] 
│ ❖ \`\`\`${prefix}play\`\`\` [teks]
│ ❖ \`\`\`${prefix}fototiktok\`\`\` 
│ ❖ \`\`\`${prefix}igpost\`\`\` [teks] 
│ ❖ \`\`\`${prefix}igtv\`\`\` 
│ ❖ \`\`\`${prefix}joox\`\`\` [teks] [Premium]
│ ❖ \`\`\`${prefix} spotify\`\`\`
│ ❖ \`\`\`${prefix}spotifysearch\`\`\`
  
╭──── *✿𝙁𝙄𝙉𝘿 𝙏𝘼𝙍𝙂𝙀𝙏✿* ────
│ ❖ \`\`\`${prefix}mutual\`\`\`
│ ❖ \`\`\`${prefix}next\`\`\`
  
╭──── *✿𝘼𝙉𝙄𝙈𝙀✿*────
│ ❖ \`\`\`${prefix}loli\`\`\`
│ ❖ \`\`\`${prefix}loli2\`\`\`
│ ❖ \`\`\`${prefix}neko\`\`\`
│ ❖ \`\`\`${prefix}waifu\`\`\`
│ ❖ \`\`\`${prefix}animecry\`\`\`
│ ❖ \`\`\`${prefix}animehug\`\`\`
│ ❖ \`\`\`${prefix}osakana\`\`\`
│ ❖ \`\`\`${prefix}naruto\`\`\`
│ ❖ \`\`\`${prefix}anime\`\`\`
│ ❖ \`\`\`${prefix}husbu\`\`\`
│ ❖ \`\`\`${prefix}animegirl\`\`\`
│ ❖ \`\`\`${prefix}animeboy\`\`\`
│ ❖ \`\`\`${prefix}nekonime\`\`\`

╭──── *✿𝘼𝙉𝙄𝙈𝘼𝙇✿* ────       
│ ❖ \`\`\`${prefix}anjing\`\`\`
│ ❖ \`\`\`${prefix}kucing\`\`\`
│ ❖ \`\`\`${prefix}hamster\`\`\`
│ ❖ \`\`\`${prefix}kelinci\`\`\`
  
╭──── *✿𝘼𝙀𝙎𝙏𝙃𝙀𝙏𝙄𝘾✿* ────
│ ❖ \`\`\`${prefix}aesthetic\`\`\`
│ ❖ \`\`\`${prefix}bluesky\`\`\`
│ ❖ \`\`\`${prefix}flower\`\`\`
│ ❖ \`\`\`${prefix}icecream\`\`\`
│ ❖ \`\`\`${prefix}pemandangan\`\`\`
  
╭──── *✿𝙌𝙐𝙊𝙏𝙀𝙎✿* ────  
│ ❖ \`\`\`${prefix}quotes\`\`\`
│ ❖ \`\`\`${prefix}quoteskehidupan\`\`\`
│ ❖ \`\`\`${prefix}quotesislami\`\`\`
│ ❖ \`\`\`${prefix}katabijak\`\`\`
│ ❖ \`\`\`${prefix}katailham\`\`\`
│ ❖ \`\`\`${prefix}quotesnasehat\`\`\`
│ ❖ \`\`\`${prefix}quotesmotivasi\`\`\`
  
╭─── *✿𝙇𝙄𝙈𝙄𝙏 & 𝙐𝘼𝙉𝙂✿* ─── 
│ ❖ \`\`\`${prefix}limit\`\`\`
│ ❖ \`\`\`${prefix}buylimit\`\`\`
│ ❖ \`\`\`${prefix}buypremiumlimit\`\`\`
│ ❖ \`\`\`${prefix}transfer\`\`\`
│ ❖ \`\`\`${prefix}leaderboard\`\`\`
  
╭──── *✿𝙂𝙍𝙊𝙐𝙋✿* ────
│ ❖ \`\`\`${prefix}promote\`\`\` [Nonaktif]
│ ❖ \`\`\`${prefix}demote\`\`\` [Nonaktif]
│ ❖ \`\`\`${prefix}tagall\`\`\`
│ ❖ \`\`\`${prefix}listadmin\`\`\`
│ ❖ \`\`\`${prefix}wakillist\`\`\`
│ ❖ \`\`\`${prefix}premiumlist\`\`\`
│ ❖ \`\`\`${prefix}banlist\`\`\`
│ ❖ \`\`\`${prefix}blocklist\`\`\`
│ ❖ \`\`\`${prefix}linkgc\`\`\`
│ ❖ \`\`\`${prefix}mining\`\`\`
│ ❖ \`\`\`${prefix}hidetag\`\`\`
│ ❖ \`\`\`${prefix}grouplist\`\`\`
│ ❖ \`\`\`${prefix}setname\`\`\`
│ ❖ \`\`\`${prefix}setdesc\`\`\`
│ ❖ \`\`\`${prefix}setpp\`\`\`
│ ❖ \`\`\`${prefix}listadmin\`\`\`
│ ❖ \`\`\`${prefix}linkgc\`\`\`
│ ❖ \`\`\`${prefix}leave\`\`\`
│ ❖ \`\`\`${prefix}mining\`\`\`
│ ❖ \`\`\`${prefix}level\`\`\`
│ ❖ \`\`\`${prefix}grup\`\`\` [buka/tutup)
│ ❖ \`\`\`${prefix}welcome\`\`\` [1/0]
│ ❖ \`\`\`${prefix}nsfw\`\`\` [1/0]
│ ❖ \`\`\`${prefix}antilink\`\`\` [1/0]
│ ❖ \`\`\`${prefix}leveling\`\`\` [1/0]
│ ❖ \`\`\`${prefix}simih\`\`\` [1/0]
 
╭──── *✿𝙎𝙊𝙐𝙉𝘿✿* ────
│ ❖ \`\`\`${prefix}hai\`\`\`
│ ❖ \`\`\`${prefix}pale\`\`\`
│ ❖ \`\`\`${prefix}yamate\`\`\`
│ ❖ \`\`\`${prefix}soundplaydate\`\`\`
│ ❖ \`\`\`${prefix}soundbakahentai\`\`\`
│ ❖ \`\`\`${prefix}iri\`\`\`
│ ❖ \`\`\`${prefix}gtts\`\`\`
│ ❖ \`\`\`${prefix}pale\`\`\`
│ ❖ \`\`\`${prefix}sound\`\`\`
│ ❖ \`\`\`${prefix}sound\`\`\` 1-25
│ ❖ \`\`\`${prefix}ayatkursi2\`\`\`
│ ❖ \`\`\`${prefix}tilawah\`\`\`
│ ❖ \`\`\`${prefix}sholawatnabi\`\`\`
│ ❖ \`\`\`${prefix}sad\`\`\`
│ ❖ \`\`\`${prefix}sad2\`\`\`
│ ❖ \`\`\`${prefix}sad3\`\`\`
│ ❖ \`\`\`${prefix}sad4\`\`\`
│ ❖ \`\`\`${prefix}aeshtetic2\`\`\`
│ ❖ \`\`\`${prefix}aeshtetic3\`\`\`
│ ❖ \`\`\`${prefix}aeshtetic4\`\`\`
│ ❖ \`\`\`${prefix}home\`\`\`
│ ❖ \`\`\`${prefix}gettingold\`\`\`
│ ❖ \`\`\`${prefix}allnight\`\`\`
│ ❖ \`\`\`${prefix}lucas\`\`\`
│ ❖ \`\`\`${prefix}wanna\`\`\`
│ ❖ \`\`\`${prefix}yourskin\`\`\`
│ ❖ \`\`\`${prefix}up\`\`\`
│ ❖ \`\`\`${prefix}cutmeoff\`\`\`
│ ❖ \`\`\`${prefix}beautiful\`\`\`
│ ❖ \`\`\`${prefix}loosinggame\`\`\`
│ ❖ \`\`\`${prefix}loosinginterest\`\`\`
│ ❖ \`\`\`${prefix}playdate\`\`\`
│ ❖ \`\`\`${prefix}slowmo\`\`\`
│ ❖ \`\`\`${prefix}bass\`\`\`
│ ❖ \`\`\`${prefix}tupai\`\`\`
│ ❖ \`\`\`${prefix}gemok\`\`\`

╭──── *✿𝙀𝘿𝙄𝙏 𝙈𝙀𝙉𝙐✿* ────
│ ❖ \`\`\`${prefix}gtav\`\`\`
│ ❖ \`\`\`${prefix}bakar\`\`\`
│ ❖ \`\`\`${prefix}crossgun\`\`\`
│ ❖ \`\`\`${prefix}facebookpage\`\`\`
│ ❖ \`\`\`${prefix}costumwp\`\`\`
│ ❖ \`\`\`${prefix}pantaimalam\`\`\`
│ ❖ \`\`\`${prefix}pencil\`\`\`
│ ❖ \`\`\`${prefix}wasted\`\`\`
│ ❖ \`\`\`${prefix}trigger\`\`\`
  
╭──── *✿𝙒𝙄𝘽𝙐✿* ────
│ ❖ \`\`\`${prefix}neonime\`\`\`
│ ❖ \`\`\`${prefix}wait\`\`\`
  
╭──── *✿18+ 𝙉𝙎𝙁𝙒✿* ────
│ ❖ \`\`\`${prefix}blowjob\`\`\` [Premium]
│ ❖ \`\`\`${prefix}randomhentai\`\`\` [Premium]
│ ❖ \`\`\`${prefix}nsfw\`\`\` [Premium]
│ ❖ \`\`\`${prefix}nsfwneko\`\`\` [Premium]
│ ❖ \`\`\`${prefix}hentai2\`\`\` [Premium]
  
╭──── *✿𝙁𝙐𝙉✿* ────
│ ❖ \`\`\`${prefix}truth\`\`\`
│ ❖ \`\`\`${prefix}dare\`\`\`
│ ❖ \`\`\`${prefix}slap\`\`\`
│ ❖ \`\`\`${prefix}tampar\`\`\`
│ ❖ \`\`\`${prefix}nangis\`\`\`
│ ❖ \`\`\`${prefix}cium\`\`\`
│ ❖ \`\`\`${prefix}simi\`\`\`
│ ❖ \`\`\`${prefix}ngewe\`\`\`
│ ❖ \`\`\`${prefix}jadian\`\`\`
│ ❖ \`\`\`${prefix}terganteng\`\`\`
│ ❖ \`\`\`${prefix}tercantik\`\`\`
  
╭──── *✿𝙊𝙒𝙉𝙀𝙍✿* ────
│ ❖ \`\`\`${prefix}setprefix\`\`\`
│ ❖ \`\`\`${prefix}setreply\`\`\`
│ ❖ \`\`\`${prefix}setppbot\`\`\`
│ ❖ \`\`\`${prefix}block\`\`\`
│ ❖ \`\`\`${prefix}unblock\`\`\`
│ ❖ \`\`\`${prefix}premium @\`\`\`
│ ❖ \`\`\`${prefix}unpremium @\`\`\`
│ ❖ \`\`\`${prefix}setprefix\`\`\`
│ ❖ \`\`\`${prefix}leave\`\`\`
│ ❖ \`\`\`${prefix}kickall\`\`\`
│ ❖ \`\`\`${prefix}event\`\`\` [1/0]
│ ❖ \`\`\`${prefix}bc\`\`\`
│ ❖ \`\`\`${prefix}bcgc\`\`\`
│ ❖ \`\`\`${prefix}clone\`\`\`
│ ❖ \`\`\`${prefix}clearall\`\`\`
  
╭──── *✿𝙊𝙏𝙃𝙀𝙍✿* ────
│ ❖ \`\`\`${prefix}wame\`\`\`
│ ❖ \`\`\`${prefix}afk\`\`\`

\`\`\`THANKS TO ITSMEIKTXSEC04\`\`\`
*GA SEMUA FITUR WORK! CAPE NGEFIX*`
                    itsmeiky.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "videoMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": "_「Author : Raditya Gay」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/ok.jpg')} } }, caption: shiz })
					break                                                           //{quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
		case 'donasi':
		case 'donate':
					 // Fix Bug By ItsmeikyXSec404				
					itsmeiky.sendMessage(from, donasi(), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					break
		case 'menupicture':
		case 'menupict':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					buffer = await getBuffer(`https://i.ibb.co/tqf0P7q/Whats-App-Image-2021-02-22-at-01-46-22.png`)
					itsmeiky.sendMessage(from, buffer, image, { quoted: iky, caption: randompict(prefix)})
					break
		case 'menuowner':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					buffer = await getBuffer(`https://i.ibb.co/5nBhggv/2b84cc9cb84d76bc5c2b27e81d6aecfd.png`)
					itsmeiky.sendMessage(from, buffer, image, { quoted: iky, caption: developer(prefix)})
					break
		case 'bahasa':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.sendMessage(from, bahasa(), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					await limitAdd(sender)
					break
		case 'kodenegara':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.sendMessage(from, negara(), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					await limitAdd(sender)
					break
		case 'del':
		case 'd':
		case 'delete':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isGroupAdmins) return reply(ind.admin())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.deleteMessage(from, { id: iky.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
		case 'level':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  ├─ ❏ *User XP* : ${userXp}/${requiredXp}\n  └─ ❏ *User Level* : ${userLevel}\n`
					itsmeiky.sendMessage(from, resul, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
		case 'say':
                                        teks = body.slice(5)
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (args.length < 1) return reply('teksnya mana kak?')
                                        saying = teks
                                        itsmeiky.sendMessage(from, saying, text)
					await limitAdd(sender)
                                        break
		case 'info':
					me = itsmeiky.user
					uptime = process.uptime()
					teks = `*INFO OWNER*\n*Owner bot* : Marcel\n*No Owner* : wa.me/6285372906349\n*Ig owner* : www.instagram.com/celstm_11\n━━━━━━━━━━━━━━━━━━━━\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Instagram Own 2* : https://instagram.com/rdtyasaha_\n*Ketik* : ${prefix}lpr _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.`
					buffer = await getBuffer(`https://i.ibb.co/YW1NF0j/logo.jpg`)
					itsmeiky.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'snk':
					me = itsmeiky.user
					uptime = process.uptime()
					teks = `*Syarat & Ketentuan BOT*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(`https://i.ibb.co/YW1NF0j/logo.jpg`)
					itsmeiky.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'lpr':
					const bug = body.slice(5)
					if (pesan.length > 300) return itsmeiky.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: iky})
					var nomor = iky.participant
					teks1 = `*[LAPORAN]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					itsmeiky.sendMessage('6285372906349@s.whatsapp.net', options, text, {quoted: iky})
					reply('Masalah telah di laporkan ke owner BOT, Laporan palsu atau main² tidak akan ditanggapi.')
					break
		case 'request':
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return itsmeiky.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: iky})
					var nomor = iky.participant
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					itsmeiky.sendMessage('6285372906349@s.whatsapp.net', options, text, {quoted: iky})
					itsmeiky.sendMessage('6285372906349@s.whatsapp.net', options, text, {quoted: iky})
					itsmeiky.sendMessage('6285372906349@s.whatsapp.net', options, text, {quoted: iky})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER BOT, Requests palsu atau main² tidak akan ditanggapi.')
					break
		case 'blocklist': 
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
						teks += `*~>* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					itsmeiky.sendMessage(from, teks.trim(), extendedText, {quoted: iky, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await itsmeiky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: iky
					}
					itsmeiky.sendMessage(from, options, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					await limitAdd(sender)
					break

                case 'afk':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                tels = body.slice(4)
                                if (args.length < 1) return reply('Kakak afk karena apa?')
                                var ain = iky.participant
                                const tagzz = {
                                                text: `@${tagzz.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [ain] }
                                        }
                                        itsmeiky.sendMessage(from, tagzz, text, {quoted: iky})
					await limitAdd(sender)
                                        break
                case 'profile':

    				itsmeiky.updatePresence(from, Presence.composing)

				
    				try {

					ppimg = await itsmeiky.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

					} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

					}

					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *Role:* ${role}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`

					buffer = await getBuffer(ppimg)

					itsmeiky.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})

					break
                case 'quotemaker':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					itsmeiky.sendMessage(from, buffer, image, { quoted: iky, caption: '*Quotes Maker*\n\n'+ quo })
					await limitAdd(sender)
					break
                case 'truth':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					itsmeiky.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
		case 'dare':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					itsmeiky.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break
		case 'quoteskehidupan':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const quotes =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Aku percaya, suatu hari nanti, aku akan memiliki semua hal yang telah aku doa kan selama ini.','Balas dendam yang paling terbaik adalah mengubah dirimu menjadi yang lebih baik lagi.','Hidupku jauh dari kata mewah, kalau kalian lihat aku selalu senang, itu karena aku tau cara menikmati hidup.','Persahabatan bukan tentang orang yang baik didepanmu, tetapi tentang orang yang tetap baik di belakangmu.','Tidak semua bisa dimiliki. Jaga yang sudah termiliki. Tidak semua bisa diterima. Pertahankan yang sudah ada.','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Ibu, sebajingan apapun anakmu ini, Hatiku selalu ingin bisa Membahagiakanmu.','Tidak semua hari berjalan dengan baik tapi ada hal baik di setiap harinya.','Pikiran negatif tidak akan pernah memberi kamu kehidupan yang positif','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Saya percaya bahwa satu-satunya keberanian yang dibutuhkan oleh seseorang adalah keberanian untuk mengikuti impian Anda sendiri.','Arti hidup adalah menemukan hadiahmu. Tujuan hidup adalah untuk memberikannya.','Ada kalanya kita dicari ketika diperlukan, Dan dilupakan setelah dapat apa yang dia inginkan.','Aku suka tidur, Bukan karena aku pemalas Hanya saja mimpiku lebih indah dari kenyataan.','Jika kamu terlahir bukan dari keluarga kaya, Maka pastikanlah keluarga kaya berasal dari mu.','Saat kamu memberi orang lain, sesungguhnya pemberian itu adalah untukmu. Dan saat kamu mendoakan orang lain, sesungguhnya doa itu juga untukmu. Maka sibuklah membahagiakan orang lain, agar kemudian dunia akan sibuk membahagiakanmu.','Pernah salah pilih, Pernah salah jalan, Karena ego, Karena ceroboh, Tapi kalau bukan karena salah, Kita tidak akan pernah belajar.','Teruntuk hatiku semoga kamu sabar dan tabah bukan untuk hari ini, tapi untuk setiap hari.','Apapun yang kamu alami hari ini tetaplah terlihat baik-baik saja, are you oke?','Wajar kulitku hitam, Tanganku kasar, Penampilanku dekil, KARENA KEGIATANKU KERJA BUKAN MEMINTA.','Sibuklah mencintai hidupmu sampai kamu tidak punya waktu untuk membenci, menyesal, ataupun merasa takut.','AKU BAHAGIA KARENA BERSYUKUR, BUKAN BERSYUKUR KARENA BAHAGIA.','Hanya karena kamu bisa melakukan apa saja, bukan berarti kamu mampu melakukan segalanya.','Kegagalan adalah kesempatan untuk memulai lagi dengan cara yang lebih cerdas.','Dulu waktu masih kecil tidak sabar pengen jadi dewasa, tapi ketika udah besar, aku baru sadar bahwa jaman kecil lah yang paling bahagia.','Saya adalah saya, Saya bukan dia ataupun mereka Jika ingin bersama saya, Terimalah apa adanya.','Online ku sangatlah santai ada yang chat ya syukur, tidak ada yang chat ya tidur.','Kamu tidak begitu dalam mengenaliku, jadi tolong berhentilah sok tau tentang hidup ku.','Saya terlahir dari keluarga sederhana jadi maaf kalau penampilan saya apa adanya.','Dirimu sebenarnya adalah apa yang kamu lakukan di saat tiada orang yang melihatmu.','Ada dua pilihan hidup di pagi hari. Kembali tidur untuk melanjutkan mimpi, atau bangun tidur untuk mewujudkan mimpi.','Orang yang dibelakangku membicarakan diriku, keadaanku, keburukanku, mungkin ia membahayakan dalam duniaku tapi yang jelas ia bermanfaat untuk akhiratku, maka biarlah ia meneruskannya. *#Jangan lupa tersenyum untuk setiap harinya*','Lupakanlah masalahmu sejenak, dan berbahagialah kamu.','Mencintai memang tentang penerimaan. Tapi bukan untuk dibodohi.','Hidup adalah keseimbangan antara menggenggam dan melepaskan.','Jalanan yang sulit seringkali membawamu ke tujuan yang paling indah.','Kita tidak gagal. Kita hanya telah belajar dari 1000 cara yang salah.','Kalau kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus melakukan sesuatu yang belum pernah kamu lakukan.','Jangan berhenti sebelum kamu bangga dengan dirimu sendiri.','Siapapun yang kamu cari.. Percayalah, dia juga sedang mencarimu.','Bahagia itu tujuan, kecewa itu jalan. Seseorang tidak akan sampai ke tujuan, tanpa melewati sebuah jalan.','Teruslah update status, setidaknya orang lain tau bahwa kamu masih hidup.','Bukan aku yang hebat. Tapi doa orang tua ku.','Kalau kamu sering disakiti orang itu artinya kamu orang baik. Ingat, cuma pohon berbuah yang dilempari batu.','Dalam hidup ini, Sadar itu penting loh, Jangan sabar mulu, CAPEK!','Kamu mempunyai banyak pilihan hidup untuk itu, Pilihlah hanya yang bisa benar-benar menjadikanmu lebih baik.','Aku kuat karena aku pernah lemah. Aku berani karena aku pernah merasa takut. Aku bijak karena aku pernah melakukan kesalahan.','Bukan berdoa untuk meminta hidup yang lebih mudah, Tapi berdoalah untuk bisa menjadi manusia yang lebih tangguh dalam menjalani hidup.','Selalu ada kisah yang kamu tidak tau di balik setiap orang. Selalu ada alasan mengapa mereka menjadi seperti itu. Pikiran hal ini sebelum kamu mencoba menghakimi orang lain.','Orang lain hanya melihat hasil akhir tanpa pernah tau bagaimana lelahnya berproses.','Kebahagiaan bukan milik mereka yang memiliki segalanya, Tetapi untuk mereka yang bisa menghargai apa yang mereka miliki.','Aku hanya ingin diperlakukan spesial lagi.','Terkadang, Hal yang menahan mu untuk bergerak maju hanyalah Pikiranmu sendiri.','Dua hal Menggambarkan dirimu : Kesabaranmu saat tak punya apa-apa Dan Sikapmu saat memiliki segalanya.','Kita hanya bersama bukan bersatu.','Saat kamu benar Semua orang lupa Saat kamu salah Semua orang ingat','Uang memang bukan segalanya tapi Tanpa uang kehidupan ini akan susah','Bila kamu Yakin , Tak perlu ada kata Mungkin','Jadilah kuat untuk melepaskan, Dan sabar untuk apa yang layak kamu dapatkan.','Pembenci itu sangat pemilih, Mereka hanya membenci orang yang hidupnya lebih baik  daripada hidup mereka.','Pasangan adalah cerminan diri kita. Maka teruslah perbaiki diri menjadi lebih baik setiap harinya, Maka pasangan terbaikpun akan diberikan tuhan.','Persahabatan adalah berbagi suka duka dan menua bersama.','Tersenyumlah ketika melihat masa lalu yang kelam, Karena engkau telah berhasil melewatinya.','Ketika banyak permasalahan yang menghampiri dirimu janganlah meminta untuk lekas dihilangkan. Tapi mintalah agar kamu bisa kuat untuk menyelesaikan.','Kehidupanmu adalah buah dari tindakan yang kamu lakukan. Tidak ada yang bisa disalahkan selain dirimu.','Kehidupan bukanlah masalah yang harus diselesaikan namun kenyataan yang harus diambil pengalamannya.','Semoga di tahun baru, Buku baru, Penulisan yang baru dengan isi yang lebih menarik untuk diimbas kembali di penghujung cerita nanti.','Masa lalu memang menyimpan banyak kenangan, Namun itu bukan alasan untuk tidak terus melangkah ke depan.','Santailah, Nikmati saja hidup, Tersenyumlah lebih banyak, Tertawalah lebih banyak, Dan janganlah memikirkan banyak hal.','Setiap perbuatan yang membahagiakan sesama adalah suatu sikap yang mencerminkan pribadi yang mulia.','Jarang yang sadar kalau kegagalan juga merupakan kesempatan emas untuk menuju kesuksesan.','Lebih baik bekerja keras dalam kediamnya kesunyian, Biarkan nanti sukses mu yang berbicara.','Belajar dari kesalahan masa lalu merupakan salah satu langkah awal untuk maju.']
					const quo = quotes[Math.floor(Math.random() * quotes.length)]
					crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
					itsmeiky.sendMessage(from, crot, image, { quoted: iky, caption: '*Quotes Kehidupan*\n\n'+ quo })
					await limitAdd(sender)
					break
		case 'quotesislami':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					itsmeiky.sendMessage(from, islam, image, { quoted: iky, caption: '*Quotes Islami*\n\n'+ isl })
					await limitAdd(sender)
					break	
		case 'quotesnasehat':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					itsmeiky.sendMessage(from, nase, image, { quoted: iky, caption: '*Quotes Nasehat*\n\n'+ nsh })
					await limitAdd(sender)
					break	
		case 'quotescinta':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const cinta =['SABAR MASIH TAHAP PEMBUATAN','MASIH TAHAP PEMBUATAN']
					const cin = cinta[Math.floor(Math.random() * cinta.length)]
					cta = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					itsmeiky.sendMessage(from, cta, image, { quoted: iky, caption: '*Quotes Cinta*\n\n'+ cin })
					await limitAdd(sender)
					break
		case 'quotesmotivasi':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					itsmeiky.sendMessage(from, vass, image, { quoted: iky, caption: '*Motivasi*\n\n'+ cin })
					await limitAdd(sender)
					break
                case 'fotocewek':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	                                const cangti = ['https://i.ibb.co/1T1DCz7/cewek-thailand-20200325-007-non-fotografer-kly.jpg','https://i.ibb.co/FsJ6jjs/kucing2.jpg','https://i.ibb.co/vvkdS7n/kucing3.jpg','https://i.ibb.co/1QHWxts/kucing4.jpg','https://i.ibb.co/JQmRz4n/kucing5.jpg','https://i.ibb.co/tBwrFkG/kucing6.jpg','https://i.ibb.co/dp0YhYm/kucing7.jpg','https://i.ibb.co/R03smZT/kucing8.jpg','https://i.ibb.co/17tw0dp/kucing9.jpg','https://i.ibb.co/7XdGGqc/kucing10.jpg','https://i.ibb.co/XL9PZxg/kucing11.jpg','https://i.ibb.co/gyjvXWN/kucing12.jpg','https://i.ibb.co/R4gg4wH/kucing13.jpg','https://i.ibb.co/PmLYtFm/kucing14.jpg','https://i.ibb.co/XbSDh47/kucing15.jpg','https://i.ibb.co/kSXNJzt/kucing16.jpg']
                                        let cangtip = cangti[Math.floor(Math.random() * cangti.length)]
                                        itsmeiky.sendMessage(from, cangtip, image, {quote: iky})
					await limitAdd(sender)
                                        break
                /*case 'kucing':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	                                const kucings = ['https://i.ibb.co/vvmp82w/kucing1.jpg']
                                        let kucigz = kucings[Math.floor(Math.random() * kucings.length)]
                                        itsmeiky.sendMessage(from, kucigz, image, {quote: iky})
					await limitAdd(sender)
                                        break*/
		case 'ssweb':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Urlnya mana kak?')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buffer = await getBuffer(anu.gambar)
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky})
					await limitAdd(sender)
					break
		case 'loli':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                        gatauda = body.slice(6)
					reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        itsmeiky.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					await limitAdd(sender)
                                        break
		case 'waifu':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await fetchJson('https://waifu.pics/api/sfw/neko')
					hasil = await getBuffer(data.url)
					itsmeiky.sendMessage(from, hasil, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					await limitAdd(sender)
					break
		case 'loli2':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/loli')
					hasil = await getBuffer(data.url)
					itsmeiky.sendMessage(from, hasil, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					await limitAdd(sender)
					break
		case 'hentai2':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(9)
					reply(ind.wait())
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/hentai')
					hasil = await getBuffer(data.url)
					itsmeiky.sendMessage(from, hasil, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
					await limitAdd(sender)
					break
		case 'animecry':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						itsmeiky.sendMessage(from, buffer, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
						fs.unlinkSync(rano)
					})
					break
		case 'animehug':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						itsmeiky.sendMessage(from, buffer, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
						fs.unlinkSync(rano)
					})
					break
		case 'pokemon':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
                case 'anjing':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break

                case 'kucing':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'doraemon':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'hamster':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'kelinci':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'mobil':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=cars`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'motor':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=motorcycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'sepeda':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=bicycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
        case 'anakharam': // Update By RzkyO & ItsmeikyXSec404		
                if (isLimit(sender)) return reply(ind.limitend(pusname))		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/AnakHaramSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'heker': // Update By RzkyO & ItsmeikyXSec404
                if (isLimit(sender)) return reply(ind.limitend(pusname))				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/HekerSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'fftourserti': // Update By RzkyO & ItsmeikyXSec404				
		        if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(12)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/FFSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'fftourserti2': // Update By RzkyO & ItsmeikyXSec404		
               if (isLimit(sender)) return reply(ind.limitend(pusname))		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/FFSerti2/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'fftourserti3': // Update By RzkyO & ItsmeikyXSec404			
                if (isLimit(sender)) return reply(ind.limitend(pusname))	
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/FFSerti3/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'fftourserti4': // Update By RzkyO & ItsmeikyXSec404	
                if (isLimit(sender)) return reply(ind.limitend(pusname))			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/FFSerti4/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'fftourserti5': // Update By RzkyO & ItsmeikyXSec404		
                if (isLimit(sender)) return reply(ind.limitend(pusname))		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/FFSerti5/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'pubgtourserti': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'pubgtourserti2': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(15)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'pubgtourserti3': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(15)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'pubgtourserti4': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(15)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'pubgtourserti5': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(15)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'mltourserti': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(12)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/MLTourSerti1/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'mltourserti2': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'mltourserti3': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'mltourserti4': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'mltourserti5': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'tweetfake': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`https://itsmeikycity.xyz/Tweet/?text=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'babu': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(5)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BabuSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'bucinserti': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BucinSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'bocilepep': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/CilEpepSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'gayserti': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GaySerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'pacar': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/PacarSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'sadboy': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/SadBoySerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'surga': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/SurgaSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'pintar': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/PintarSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'badboy': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BadBoySerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'badgirl': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(8)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BadGirlSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'goodboy': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(8)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GoodBoySerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'goodgirl': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GoodGirlSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'editorberkelas': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(15)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/EditorBerkelasSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'goodlooking': // Update By RzkyO & ItsmeikyXSec404	
                if (isLimit(sender)) return reply(ind.limitend(pusname))			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(12)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GoodLookingSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'fucekboy': // Update By RzkyO & ItsmeikyXSec404			
                if (isLimit(sender)) return reply(ind.limitend(pusname))	
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/FucekBoySerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'jamet': // Update By RzkyO & ItsmeikyXSec404	
                if (isLimit(sender)) return reply(ind.limitend(pusname))			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/JametSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'youtuber': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[❕] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/YoutuberSerti/img.php?nama=${ct}`)
				itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: 'Zzzzz'})
				break
		case 'bluesky':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-blue-sky`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'flower':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-flower`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'icecream':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic%20ice%20cream`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'pemandangan':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic%20pemandangan%20alam`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'osakana':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=osakana`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'menherachan':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=menhera-chan`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'naruto':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=naruto%20uzumaki%20wallpaper%20hd`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'animegirl':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime-girl`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'animeboy':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime-boy`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'quotesid':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes%20indonesia`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'quotesen':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'katakata':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=katakata`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'katamotivasi':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kata%20motivasi`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'kehidupan':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kata%20kata%20bijak%20kehidupan`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'islami':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes%20islami`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					niiky =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(niiky)
					itsmeiky.sendMessage(from, pok, image, { quoted: iky })
					await limitAdd(sender)
					break
		case 'fototiktok':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(12)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
					buffer = await getBuffer(anu.result)
					reply(buffer)
					await limitAdd(sender)
					break
		case 'map':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
					buffer = await getBuffer(anu.gambar)
					itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: `${body.slice(5)}`})
					await limitAdd(sender)
					break
                case 'kbbi':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'artinama':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
		case 'quran':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					itsmeiky.sendMessage(from, quran, text, {quoted: iky})
					await limitAdd(sender)
					break
		case 'jadwalsholat':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('kota nya mana kak?')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${body.slice(14)}&apikey=BotWeA`, {method: 'get'})
					sholat = `Ashar : ${anu.result.ashar}\nDzuhur : ${anu.result.dzuhur}\nMagrib : ${anu.result.maghrib}\nIsha : ${anu.result.isha}\nSubuh : ${anu.result.subuh}`
					itsmeiky.sendMessage(from, sholat, text, {quoted: iky})
					await limitAdd(sender)
					break
                case 'neonime':
				         // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
                 if (!isGroup) return reply(ind.groupo())
				        if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					itsmeiky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
		case 'ocr': 
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						const media = await itsmeiky.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
			case 'stickergif':
			case 'stikergif':
			case 'sgif':
			case 'stiker': 
			case 'sticker':
			case 's':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
                 if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						const media = await itsmeiky.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								itsmeiky.sendMessage(from, buffer, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && iky.message.videoMessage.seconds < 11 || isQuotedVideo && iky.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						const media = await itsmeiky.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								itsmeiky.sendMessage(from, buffer, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break
        break
		case 'gtts':
		case 'tts':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
                 if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return itsmeiky.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: iky})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return itsmeiky.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: iky})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							itsmeiky.sendMessage(from, buffer, audio, {quoted: iky, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
        case 'jadian':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
          case 'ngewe':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case 'terganteng':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case 'tercantik':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
		case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setlimitt':
		case 'addlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'setmemlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'tiktokstalk':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				try {
						if (args.length < 1) return itsmeiky.sendMessage(from, '*Username mana kak?', text, {quoted: iky})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						itsmeiky.sendMessage(from, buffer, image, {quoted: iky, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*(ERROR)* *Kemungkinan username tidak valid*')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
				if (!isGroup) return reply(ind.groupo())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await itsmeiky.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				itsmeiky.sendMessage(from, yeh, text, {quoted: iky})
				await limitAdd(sender)
				break
        case 'celgroup':
        case 'celgrup':
                    itsmeiky.sendMessage(from, '➥ *Grup Official Marcel BOT* https://chat.whatsapp.com/DulBXyjiyK2K85IzhzjaxK',MessageType.text, { quoted: iky} )
                    break
		case 'sayang':
					itsmeiky.sendMessage(from, 'Apa sayangku? 🥰',MessageType.text, { quoted: iky} )
					break
		case 'gelud':
					itsmeiky.sendMessage(from, 'Kuylah, dapat duit aku..',MessageType.text, { quoted: iky} )
					break
		case 'bot':
					itsmeiky.sendMessage(from, 'Iya kak? \nJangan lupa daftar iya kak ^^"\nJika sudah silahkan berarti sudah terdaftar kak ^^"',MessageType.text, { quoted: iky} )
					break
		case 'hargaprem':
		case 'hargapremium':
					itsmeiky.sendMessage(from, 'Level 100 = Free 3 day (premium)\n10k = 7day (premium)\n25k = bulan (premium)',MessageType.text, { quoted: iky} )
					break
		case 'buypremium':
					itsmeiky.sendMessage(from, 'Ingin membeli premium?\nHarap hubungi kami : wa.me/6285372906349',MessageType.text, { quoted: iky} )
					break
		case 'buypremunlimited':
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					itsmeiky.sendMessage(from, 'Selamat kamu sudah berlangganan selamanya 🎉',MessageType.text, { quoted: iky} )
					break
		case 'buyprem30day':
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					itsmeiky.sendMessage(from, 'Selamat kamu sudah berlangganan 30 hari',MessageType.text, { quoted: iky} )
					break
		case 'buyprem7day':
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					itsmeiky.sendMessage(from, 'Selamat kamu sudah berlangganan 7 hari',MessageType.text, { quoted: iky} )
					break
		case 'test':
					itsmeiky.sendMessage(from, 'Active',MessageType.text, { quoted: iky} )
					break
		case 'ping':
					itsmeiky.sendMessage(from, 'Active',MessageType.text, { quoted: iky} )
					break
		case 'assalamualaikum':
					itsmeiky.sendMessage(from, 'Waalaikumusalam',MessageType.text, { quoted: iky} )
					break
		case 'kontol':
					itsmeiky.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6281281872699',MessageType.text, { quoted: iky} )
					break
		case 'meiky':
					itsmeiky.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6281281872699',MessageType.text, { quoted: iky} )
					break
		case 'jembut':
					itsmeiky.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6281281872699',MessageType.text, { quoted: iky} )
					break
		case 'ngentod':
					itsmeiky.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6281281872699',MessageType.text, { quoted: iky} )
					break
		case 'kntl':
					itsmeiky.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6281281872699',MessageType.text, { quoted: iky} )
					break

		case 'wa.me':
		case 'wame':
  					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
  					if (isLimit(sender)) return reply(ind.limitend(pusname))
  					itsmeiky.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					itsmeiky.sendMessage(from, options, text, { quoted: iky } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  					break
		case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*~>* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
		case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await itsmeiky.chats.all()
					itsmeiky.setMaxListeners(25)
					for (let _ of anu) {
						itsmeiky.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
		case 'blockk':
				 itsmeiky.updatePresence(from, Presence.composing) 
				 itsmeiky.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					itsmeiky.blockUser (`${body.slice(8)}@c.us`, "add")
					itsmeiky.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblockk':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
				    itsmeiky.blockUser (`${body.slice(10)}@c.us`, "remove")
					itsmeiky.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'block':
				 itsmeiky.updatePresence(from, Presence.composing) 
				 itsmeiky.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					itsmeiky.blockUser (`${body.slice(7)}@c.us`, "add")
					itsmeiky.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    itsmeiky.blockUser (`${body.slice(9)}@c.us`, "remove")
					itsmeiky.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'leave':
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					itsmeiky.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					itsmeiky.updatePresence(from, Presence.composing) 
					itsmeiky.sendMessage(from, 'Sampai jumpa 👋', text) // ur cods
					}, 0)
					break
		case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await itsmeiky.chats.all()
					if (isMedia && !iky.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						buff = await itsmeiky.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							itsmeiky.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'bcc': 
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('.......')
					anu = await itsmeiky.chats.all()
					if (isMedia && !iky.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						buff = await itsmeiky.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							itsmeiky.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await itsmeiky.downloadAndSaveMediaMessage(iky)
					await itsmeiky.updateProfilePicture (from, media)
					reply('*Sukses mengganti icon group*')
					break				
		//case 'add':
					//if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						itsmeiky.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						itsmeiky.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						itsmeiky.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  itsmeiky.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: iky}) //{ contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream","title": "_*BENNYBOT*_", "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                  itsmeiky.sendMessage(from, 'Mau sewa bot ya? jangan lupa ketik #donasi dlu',MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "title": "_「Mengomke」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/gokil.jpg')} } }})
					break    
           /*case 'setname':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					itsmeiky.groupUpdateSubject(from, `${body.slice(9)}`)
					itsmeiky.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: iky})
					break*/
                /*case 'setdesc':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					itsmeiky.groupUpdateDescription(from, `${body.slice(9)}`)
					itsmeiky.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: iky})
					break*/
           /*case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
					mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						itsmeiky.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
						itsmeiky.groupDemoteAdmin(from, mentioned)
					}
					break*/
			/*case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
					mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						itsmeiky.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
						itsmeiky.groupMakeAdmin(from, mentioned)
					}
					break*/
		//case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Asek jatah kick, otw kick* 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						//itsmeiky.groupRemove(from, mentioned)
					} else {
						mentions(`*Asek jatah kick, otw kick* @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						itsmeiky.groupRemove(from, mentioned)
					}
					break
		case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
		case 'toimg':
				 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isQuotedSticker) return reply('*Reply/Tag sticker!*')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await itsmeiky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						itsmeiky.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「Marcel Bot」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('src/logo.jpg')} } }})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                 case 'simi':
					if (args.length < 1) return reply('Textnya mana kak?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
		case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
		case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes mengaktifkan mode nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
		case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (args[0] === '1') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
					_leveling.push(from)
					fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === '0') {
					_leveling.splice(from, 1)
						fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
						reply(ind.lvloff())
					} else {
						reply(ind.satukos())
					}
					break
        case 'fitnah':
				if (isBanned) return reply(mess.only.benned)    
		
				
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`)
				var gh = body.slice(8)
				mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid
				var replace = gh.split("/")[0];
				var target = gh.split("/")[1];
				var bot = gh.split("/")[2];
				itsmeiky.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
			break
		case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'antilink':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						itsmeiky.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return reply('*Only Admin & Owner Kami!*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'eventt':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
		case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
					mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await itsmeiky.getProfilePicture(id)
						buffer = await getBuffer(pp)
						itsmeiky.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
					if (!isPremium) return reply('Maaf kamu bukan user premium!')
					if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						media = await itsmeiky.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							itsmeiky.sendMessage(from, res.video, video, {quoted: iky, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break

case 'iri':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
const irimp3 = fs.readFileSync('./assets/iri.mp3');
return itsmeiky.sendMessage(from, irimp3, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
const pa = fs.readFileSync('assets/pale.mp3')
return itsmeiky.sendMessage(from, pa, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
const soun = fs.readFileSync('assets/sound.mp3')
return itsmeiky.sendMessage(from, soun, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
satu = fs.readFileSync('./assets/sound1.mp3');
return itsmeiky.sendMessage(from, satu, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
dua = fs.readFileSync('./assets/sound2.mp3');
return itsmeiky.sendMessage(from, dua, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
tiga = fs.readFileSync('./assets/sound3.mp3');
return itsmeiky.sendMessage(from, tiga, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
empat = fs.readFileSync('./assets/sound4.mp3');
return itsmeiky.sendMessage(from, empat, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
lima = fs.readFileSync('./assets/sound5.mp3');
return itsmeiky.sendMessage(from, lima, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
enam = fs.readFileSync('./assets/sound6.mp3');
return itsmeiky.sendMessage(from, enam, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
tujuh = fs.readFileSync('./assets/mantap.m4a');
return itsmeiky.sendMessage(from, tujuh, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound8':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
satu = fs.readFileSync('./assets/sound8.mp3');
return itsmeiky.sendMessage(from, satu, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
 dua = fs.readFileSync('assets/sound9.mp3')
return itsmeiky.sendMessage(from, dua, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
 tiga  = fs.readFileSync('assets/sound10.mp3')
return itsmeiky.sendMessage(from, tiga, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound11':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
satu  = fs.readFileSync('./assets/sound11.mp3');
return itsmeiky.sendMessage(from, satu, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
dua   = fs.readFileSync('./assets/sound12.mp3');
return itsmeiky.sendMessage(from, dua, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
tiga   = fs.readFileSync('./assets/sound13.mp3');
return itsmeiky.sendMessage(from, tiga, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
empat   = fs.readFileSync('./assets/sound14.mp3');
return itsmeiky.sendMessage(from, empat, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
lima   = fs.readFileSync('./assets/sound15.mp3');
return itsmeiky.sendMessage(from, lima, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
enam   = fs.readFileSync('./assets/sound16.mp3');
return itsmeiky.sendMessage(from, enam, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
tujuh   = fs.readFileSync('./assets/sound17.mp3');
return itsmeiky.sendMessage(from, tujuh, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound18':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
satu   = fs.readFileSync('./assets/sound18.mp3');
return itsmeiky.sendMessage(from, satu, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
dua   = fs.readFileSync('assets/sound19.mp3')
return itsmeiky.sendMessage(from, dua, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
tiga = fs.readFileSync('assets/sound20.mp3')
return itsmeiky.sendMessage(from, tiga, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound21':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
empat  = fs.readFileSync('./assets/sound21.mp3');
return itsmeiky.sendMessage(from, satu, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
lima = fs.readFileSync('./assets/sound22.mp3');
return itsmeiky.sendMessage(from, dua, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
enam = fs.readFileSync('./assets/sound23.mp3');
return itsmeiky.sendMessage(from, tiga, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
tujuh = fs.readFileSync('./assets/sound24.mp3');
return itsmeiky.sendMessage(from, empat, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
 lima = fs.readFileSync('./assets/sound25.mp3');
return itsmeiky.sendMessage(from, lima, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
 enam = fs.readFileSync('./assets/sound26.mp3');
return itsmeiky.sendMessage(from, enam, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
 tujuh = fs.readFileSync('./assets/sound27.mp3');
return itsmeiky.sendMessage(from, tujuh, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'yamate':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
tujuh = fs.readFileSync('./assets/yamete');
return itsmeiky.sendMessage(from, tujuh, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break	
case 'bot':
tujuh = fs.readFileSync('./assets/bot');
return itsmeiky.sendMessage(from, tujuh, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'odading':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
tujuh = fs.readFileSync('./assets/odading');
return itsmeiky.sendMessage(from, tujuh, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'marcel':
tujuh = fs.readFileSync('./assets/marcel.mp3');
return itsmeiky.sendMessage(from, tujuh, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case 'home':
const home = fs.readFileSync('mp3/home.mp3')
itsmeiky.sendMessage(from, home, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('mp3/gettingold.mp3')
itsmeiky.sendMessage(from, getting, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad':
const sad1 = fs.readFileSync('mp3/sad.mp3')
itsmeiky.sendMessage(from, sad1, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('mp3/sad2.mp3')
itsmeiky.sendMessage(from, sad2, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('mp3/sad3.mp3')
itsmeiky.sendMessage(from, sad3, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('mp3/sad4.mp3')
itsmeiky.sendMessage(from, sad4, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('mp3/aeshtetic.mp3')
itsmeiky.sendMessage(from, tetik, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('mp3/aeshtetic2.mp3')
itsmeiky.sendMessage(from, tetik3, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('mp3/aeshtetic3.mp3')
itsmeiky.sendMessage(from, tetik3, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('mp3/aeshtetic4.mp3')
itsmeiky.sendMessage(from, tetik4, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('mp3/allnight.mp3')
itsmeiky.sendMessage(from, allnight, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'lucas':
const lucas = fs.readFileSync('mp3/lucas.mp3')
itsmeiky.sendMessage(from, lucas, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'sowell':
const well = fs.readFileSync('mp3/sowell.mp3')
itsmeiky.sendMessage(from, well, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('mp3/wanna.mp3')
itsmeiky.sendMessage(from, wanna, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('mp3/up.mp3')
itsmeiky.sendMessage(from, ups, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('mp3/yourskin.mp3')
itsmeiky.sendMessage(from, skin, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('mp3/cutmeoff.mp3')
itsmeiky.sendMessage(from, moff, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('mp3/beautiful.mp3')
itsmeiky.sendMessage(from, ful, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('mp3/loosinggame.mp3')
itsmeiky.sendMessage(from, gam, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('mp3/loosinginterest.mp3')
itsmeiky.sendMessage(from, rest, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('mp3/playdate.mp3')
itsmeiky.sendMessage(from, date, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('mp3/ayatkursi2.mp3')
itsmeiky.sendMessage(from, kursi, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('mp3/tilawah.mp3')
itsmeiky.sendMessage(from, tilawah, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawatnabi':
const nabi = fs.readFileSync('mp3/sholawatnabi.mp3')
itsmeiky.sendMessage(from, nabi, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('mp3/ngaji.mp3')
itsmeiky.sendMessage(from, ngaji1, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('mp3/ngaji2.mp3')
itsmeiky.sendMessage(from, ngaji2, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break 
                 default:
			if (budy.includes(`assalamualaikum`)) {
		        const assalamualaikum = fs.readFileSync('./assets/assalamualaikum');
                return itsmeiky.sendMessage(from, assalamualaikum, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }

		if (budy.includes(`Assalamualaikum`)) {
		        const assalamualaikum = fs.readFileSync('./assets/assalamualaikum');
                return itsmeiky.sendMessage(from, assalamualaikum, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }
                  
                  if (budy.includes(`syalom`)) {
                  reply(`waalaikumsalam`)
                  }

		if (budy.includes(`Sayang`)) {
                  reply(`Aku Juga Sayang Kamu Kak:v`)
                  }

		if (budy.includes(`sayang`)) {
                  reply(`Aku Juga Sayang Kamu Kak:v`)
                  }


		if (budy.includes(`Raditya`)) {
                  reply(`*Jangan Panggil Owner ku asw*`)
                  }

		if (budy.includes(`Thanks`)) {
                  reply(`Sama Sama Kak`)
                  }

		if (budy.includes(`Makasih`)) {
                  reply(`Sama Sama Kak`)
                  }
                  
       if (budy.includes(`Alsky`)) {
                  reply(`Kenapa Manggil Admin Ku, Nanti nanges`)
                  }
                  
       if (budy.includes(`alsky`)) {
                  reply(`Kenapa Manggil Admin Ku, Nanti nanges`)
                  }

		if (budy.includes(`6285372906349`)) {
                const situmorang = fs.readFileSync('./assets/situmorang');
                return itsmeiky.sendMessage(from, situmorang, MessageType.sticker, {quoted: iky})
                  }
        
        if (budy.includes(`Kontol`)) {
		        const kasar = fs.readFileSync('./assets/kasar');
                return itsmeiky.sendMessage(from, kasar, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }
                  
        if (budy.includes(`kontol`)) {
		        const kasar = fs.readFileSync('./assets/kasar');
                return itsmeiky.sendMessage(from, kasar, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }           
                  
        if (budy.includes(`Ngentod`)) {
		        const kasar = fs.readFileSync('./assets/kasar');
                return itsmeiky.sendMessage(from, kasar, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }
                  
        if (budy.includes(`Anjing`)) {
		        const kasar = fs.readFileSync('./assets/kasar');
                return itsmeiky.sendMessage(from, kasar, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }
                  
         if (budy.includes(`Anjg`)) {
		        const kasar = fs.readFileSync('./assets/kasar');
                return itsmeiky.sendMessage(from, kasar, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }         
                  
        if (budy.includes(`Memek`)) {
		        const kasar = fs.readFileSync('./assets/kasar');
                return itsmeiky.sendMessage(from, kasar, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }
                  
        if (budy.includes(`Tolol`)) {
		        const kasar = fs.readFileSync('./assets/kasar');
                return itsmeiky.sendMessage(from, kasar, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }         
                  
        if (budy.includes(`tolol`)) {
		        const kasar = fs.readFileSync('./assets/kasar');
                return itsmeiky.sendMessage(from, kasar, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }        
                  
        if (budy.includes(`bangsat`)) {
		        const kasar = fs.readFileSync('./assets/kasar');
                return itsmeiky.sendMessage(from, kasar, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }  
                  
        if (budy.includes(`Bangsat`)) {
		        const kasar = fs.readFileSync('./assets/kasar');
                return itsmeiky.sendMessage(from, kasar, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }          
                  
       if (budy.includes(`babi`)) {
		        const kasar = fs.readFileSync('./assets/kasar');
                return itsmeiky.sendMessage(from, kasar, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }           
        
        if (budy.includes(`12562120001`)) {
                const situmorang = fs.readFileSync('./assets/situmorang');
                return itsmeiky.sendMessage(from, situmorang, MessageType.sticker, {quoted: iky})
                  }
                  
        if (budy.includes(`Raditya`)) {
                const situmorang = fs.readFileSync('./assets/situmorang');
                return itsmeiky.sendMessage(from, situmorang, MessageType.sticker, {quoted: iky})
                  }

		if (budy.includes(`Marcel`)) {
                const situmorang = fs.readFileSync('./assets/situmorang');
                return itsmeiky.sendMessage(from, situmorang, MessageType.sticker, {quoted: iky})
                  }

		if (budy.includes(`bot`)) {
		const bot = fs.readFileSync('./assets/bot');
                return itsmeiky.sendMessage(from, bot, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.includes(`Bot`)) {
                const bot = fs.readFileSync('./assets/bot');
                return itsmeiky.sendMessage(from, bot, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.includes(`Marcel`)) {
		        const marcel = fs.readFileSync('./assets/marcel');
                return itsmeiky.sendMessage(from, marcel, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }
         if (budy.includes(`marcel`)) {
		        const marcel = fs.readFileSync('./assets/marcel');
                return itsmeiky.sendMessage(from, marcel, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
                  }
			
			
			if (body.startsWith(`${prefix}${command}`)) {

                  //reply(`Maaf *${pushname}*, Command //*${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)

                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
