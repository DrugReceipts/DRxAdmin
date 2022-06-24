"use strict";

const getPluginConfig = require("../helpers/pluginConfig");

/**
 * @typedef {import('../../types/typedefs').PluginConfigMap} PluginConfigMap
 * @typedef {import('../../types/typedefs').FeatureAvailability} FeatureAvailability
 */

/**
 * Build config map object
 * @returns {PluginConfigMap}
 */
const buildConfig = (strapi) => {
  const pluginConfig = getPluginConfig(strapi);

  return {
    buildHook: pluginConfig("buildHook"),
    accessToken: pluginConfig("accessToken"),
    siteId: pluginConfig("siteId"),
  };
};

/**
 * Return the availability for the input feature
 * @param {PluginConfigMap} configObj Configuration file
 * @param {keyof PluginConfigMap} configName Name of the config prop, it is a key of the object {@link PluginConfigMap}
 * @returns {FeatureAvailability}
 */
const getFeatureAvailability = (configObj, configName) => {
  if (!configObj) {
    return "MISSING_CONFIG_OBJECT";
  }

  if (!configObj[configName]) {
    return "MISSING_CONFIG_VARIABLE";
  }

  return "AVAILABLE";
};

module.exports = {
  buildConfig,
  getFeatureAvailability,
};
