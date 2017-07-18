var config = {};

config.SERVER_PORT = process.env.PORT || 3000;

config.BOT_NAME = process.env.TELEGRAM_USERNAME;
config.TOKEN = process.env.TELEGRAM_TOKEN;
config.START_MESSAGE = "🇮🇹ITA: Mandami un messaggio con scritto
-  /s per foto HOT 
- /gif per GIF o VIDEO HOT!
- /h per Hentai!";
config.HELP_MESSAGE = "🇺🇸EN:Send me a message typing:
- /s for HOT pictures 
-  /gif for hot and Sexy GIFS!
- /h for Hentai Pics!";
config.TIME_LIMIT = 2;

config.TELEGRAM_BASE_URL = "https://api.telegram.org/bot";
config.TELEGRAM_SETUP_WEBHOOK = "/setWebhook?url=:url";
config.TELEGRAM_POST_MESSAGE = "/sendMessage";
config.TELEGRAM_POST_IMAGE = "/sendPhoto";
config.TELEGRAM_POST_VIDEO = "/sendVideo";
config.TELEGRAM_POST_DOCUMENT = "/sendDocument";
config.TELEGRAM_ANSWER_QUERY = "/answerInlineQuery";
config.TELEGRAM_CHAT_ACTION = '/sendChatAction';

config.CHAN_BASE_URL = "http://a.4cdn.org/";
config.CHAN_IMAGE_BASE_URL = "http://i.4cdn.org/";

config.BOTAN_TOKEN = process.env.BOTAN_TOKEN;

config.GENERIC_COMMANDS = ["/start", "/help"];
config.CHAN_SAFE_COMMANDS = ["/i", "/ic", "/r9k", "/s4s", "/cm", "/hm", "/lgbt", "/y", "/3", "/aco", "/adv", "/an", "/asp", "/biz", "/cgl", "/ck", "/co", "/diy", "/fa", "/fit", "/gd", "/his", "/int", "/jp", "/lit", "/mu", "/n", "/news", "/out", "/po", "/pol", "/sci", "/soc", "/sp", "/tg", "/toy", "/trv", "/tv", "/vp", "/wsg", "/x"];
config.CHAN_UNSAFE_COMMANDS = ["/a", "/b", "/c", "/d", "/e", "/f", "/g", "/gif", "/h", "/hc", "/hr", "/k", "/m", "/o", "/p", "/r", "/s", "/t", "/u", "/v", "/vg", "/vr", "/w", "/wg"];
config.COMMANDS = config.GENERIC_COMMANDS.concat(config.CHAN_SAFE_COMMANDS).concat(config.CHAN_UNSAFE_COMMANDS);
config.BOARD_COMMANDS = config.CHAN_SAFE_COMMANDS.concat(config.CHAN_UNSAFE_COMMANDS);

config.VALID_QUERIES = config.BOARD_COMMANDS.map(function(cmd) {return cmd.replace("/","");});
config.QUERY_RESULT_COUNT = 20;

module.exports = config;
