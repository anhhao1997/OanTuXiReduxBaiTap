const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/gameOanTuXi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/gameOanTuXi/bao.png", datCuoc: true },
  ],
  ketQua: "Bạn đã thắng!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png" },
};

export const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_ITEM": {
      let mangCuocUpdate = [...state.mangDatCuoc];

      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        return { ...item, datCuoc: false };
      });

      let index = mangCuocUpdate.findIndex((item) => item.ma === action.maCuoc);

      if (index !== -1) {
        mangCuocUpdate[index].datCuoc = true;
      }
      state.mangDatCuoc = mangCuocUpdate;

      return { ...state };
    }

    case "PLAY_RANDOM": {
      let numberRandom = Math.floor(Math.random() * 3);

      let computerRandom = state.mangDatCuoc[numberRandom];

      state.computer = computerRandom;

      return { ...state };
    }

    case "KET_QUA": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo": {
          if (computer.ma === "keo") {
            state.ketQua = "Kết quả hòa!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Kết quả bạn thua!";
          } else {
            state.ketQua = "Kết quả bạn thắng!";
            state.soBanThang +=1;
          }
          break;
        }

        case "bua": {
          if (computer.ma === "keo") {
            state.ketQua = "Kết quả bạn thắng!";
            state.soBanThang +=1;
          } else if (computer.ma === "bua") {
            state.ketQua = "Kết quả hòa!";
          } else {
            state.ketQua = "Kết quả bạn thua!";
          }
          break;
        }
        case "bao": {
          if (computer.ma === "keo") {
            state.ketQua = "Kết quả thua!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Kết quả bạn thắng!";
            state.soBanThang +=1;
          } else {
            state.ketQua = "Kết quả hòa!";
          }
          break;
        }
      }
      state.soBanChoi += 1;
      return { ...state };
    }
    default:
      return state;
  }
};
