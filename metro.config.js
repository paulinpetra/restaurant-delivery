const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

// @ts-ignore - NativeWind types might not be up to date
module.exports = withNativeWind(config, { input: './app/global.css' })