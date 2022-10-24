/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function () {
  return {
    //logo: require('@/Assets/Images/TOM.png'),
    logo: {
      uri: "https://i.ibb.co/02ZNDQC/z-light.png"
    },
    logoStyle: {
      height: 200,
      mode: 'contain',
      width: 200,
    }
  }
}
