// Icon aliases - maps common search terms to actual icon names
export const iconAliases = {
  // Cross/Close variations
  cross: ["close-circle", "close-square", "close"],
  cancel: ["close-circle", "close-square"],
  xmark: ["close-circle", "close-square", "close"],

  // Delete/Trash variations
  delete: ["trash", "close-circle", "minus-cirlce"],
  remove: ["trash", "close-circle", "minus-cirlce"],
  bin: ["trash"],

  // Tick/Check variations
  tick: ["tick-circle", "tick-square", "check"],
  check: ["tick-circle", "tick-square", "verify"],
  done: ["tick-circle", "tick-square"],
  success: ["tick-circle", "tick-square"],
  checkmark: ["tick-circle", "tick-square"],
  verify: ["tick-circle", "verify", "shield-tick"],

  // Mail/Message variations
  mail: ["sms", "message", "message-text"],
  email: ["sms", "message", "message-text"],
  inbox: ["sms", "direct-inbox", "message"],

  // Add/Plus variations
  plus: ["add", "add-circle", "add-square"],
  create: ["add", "add-circle", "pen-add"],
  new: ["add", "add-circle"],

  // Edit variations
  edit: ["edit", "edit-2", "pen-tool"],
  pencil: ["edit", "pen-tool"],
  write: ["edit", "pen-tool"],

  // Search variations
  search: ["search-normal", "search-zoom-in", "search-favorite"],
  find: ["search-normal"],
  magnify: ["search-zoom-in"],

  // Settings variations
  settings: ["setting", "setting-2", "setting-3"],
  preferences: ["setting", "setting-2"],
  config: ["setting", "setting-2"],
  gear: ["setting", "setting-2"],

  // User/Profile variations
  user: ["user", "profile", "profile-circle"],
  profile: ["user", "profile", "profile-circle"],
  account: ["user", "profile"],
  person: ["user", "profile"],

  // Home variations
  home: ["home", "home-1", "home-2"],
  house: ["home", "house"],

  // Heart/Like variations
  heart: ["heart", "like", "like-1"],
  like: ["heart", "like", "like-1"],
  favorite: ["heart", "like", "star"],
  love: ["heart", "like"],

  // Star/Rating variations
  star: ["star", "star-1", "medal-star"],
  rating: ["star", "ranking"],
  favourite: ["star", "heart"],

  // Lock/Security variations
  lock: ["lock", "lock-1", "lock-circle"],
  unlock: ["unlock"],
  security: ["lock", "security", "shield-security"],
  secure: ["lock", "shield"],

  // Warning/Alert variations
  warning: ["warning-2", "danger", "info-circle"],
  alert: ["notification", "notification-bing", "danger"],
  error: ["danger", "close-circle"],

  // Calendar/Date variations
  calendar: ["calendar", "calendar-1", "calendar-2"],
  date: ["calendar"],
  schedule: ["calendar", "clock"],

  // Time/Clock variations
  time: ["clock", "clock-1", "timer"],
  clock: ["clock", "clock-1"],
  timer: ["timer", "timer-1"],

  // Download/Upload variations
  download: ["document-download", "arrow-down", "import"],
  upload: ["document-upload", "arrow-up", "export"],
  import: ["import", "document-download"],
  export: ["export", "document-upload"],

  // Arrow variations
  arrow: ["arrow", "arrow-right", "arrow-left", "arrow-up", "arrow-down"],
  next: ["arrow-right", "next", "forward"],
  previous: ["arrow-left", "previous", "backward"],
  back: ["arrow-left", "back-square"],

  // Copy/Paste variations
  copy: ["copy", "document-copy"],
  duplicate: ["copy", "document-copy"],
  paste: ["clipboard"],
  clipboard: ["clipboard"],

  // File/Document variations
  file: ["document", "document-text"],
  document: ["document", "document-text"],
  page: ["document", "note"],

  // Folder variations
  folder: ["folder", "folder-2", "folder-open"],
  directory: ["folder"],

  // Image/Picture variations
  image: ["image", "gallery", "picture-frame"],
  picture: ["image", "gallery"],
  photo: ["image", "gallery", "camera"],
  gallery: ["gallery"],

  // Video variations
  video: ["video", "video-play", "video-circle"],
  play: ["play", "video-play"],

  // Audio/Music variations
  audio: ["music", "musicnote", "volume"],
  music: ["music", "musicnote"],
  sound: ["sound", "volume"],
  volume: ["volume", "speaker"],

  // Phone/Call variations
  phone: ["call", "mobile"],
  call: ["call", "calling"],
  mobile: ["mobile"],

  // Location/Map variations
  location: ["location", "gps", "map"],
  map: ["map", "location"],
  gps: ["gps", "location"],
  pin: ["location"],

  // Shopping/Cart variations
  cart: ["shopping-cart", "bag"],
  shop: ["shop", "shopping-cart", "bag"],
  shopping: ["shopping-cart", "shop"],
  bag: ["bag", "shopping-bag"],

  // Money/Payment variations
  money: ["dollar-circle", "money", "wallet"],
  dollar: ["dollar-circle"],
  payment: ["wallet", "card"],
  wallet: ["wallet"],

  // Social Media
  github: ["github"],
  twitter: ["twitter"],
  x: ["new-twitter"],
  instagram: ["instagram"],
  facebook: ["facebook"],
  youtube: ["youtube"],
  linkedin: ["linkedin"],
  discord: ["discord"],
  twitch: ["twitch"],

  // Sparkle , Ai
  sparkle: ["sparkle", "magic", "ai", "star"],

};

// Helper function to get all related icon names for a search term
export function getIconsByAlias(searchTerm) {
  const lowerTerm = searchTerm.toLowerCase();
  return iconAliases[lowerTerm] || [];
}

// Helper function to check if an icon matches any alias
export function matchesAlias(iconName, searchTerm) {
  const lowerTerm = searchTerm.toLowerCase();
  const aliases = iconAliases[lowerTerm];

  if (!aliases) return false;

  const lowerIconName = iconName.toLowerCase();
  return aliases.some((alias) => lowerIconName.includes(alias));
}
