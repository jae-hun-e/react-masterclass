// import original module declarations
import "styled-components";

// ! 여기에 테마의 속성값 타입을 지정해준다.
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
    boardColor?: string;
    cardColor?: string;
    red?: string;
    black?: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white?: {
      darker: string;
      lighter: string;
    };
    // borderRadius: string;

    // colors: {
    //   main: string;
    //   secondary: string;
    // };
  }
}
