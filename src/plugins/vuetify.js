import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            dark: {
                primary: "#FF7028",
                secondary: "#FFFFFD",
                accent: "693D2A",
                background: "#2E2E2B",
            },
            light: {
                primary: "#5D0F2F",
                secondary: "#212121",
                accent: colors.blueGrey.base,
                // background: "#FFA980"
            }
        }
    }
});