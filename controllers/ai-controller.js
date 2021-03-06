const request = require("request");

//async function predict_tl(params) {}

function predict_tl(province_id, rice_id, mode, start_date) {
  return new Promise((resolve) => {
    console.log(province_id);
    console.log(rice_id);
    console.log(mode);
    console.log(start_date);
    //let url_callback = "http://192.168.1.101:3000/api/varieties/eval";
    request(
      {
        url: "http://150.95.88.242:10005/predict",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        formData: {
          province_id: province_id,
          rice_id: rice_id,
          mode: mode,
          start_date: start_date,
        },
      },
      function (err, resp, body) {
        if (err) resolve("Error");
        if (resp) console.log("OK");
        if (body) {
          //console.log(body);
          resolve(JSON.parse(body));
        }
      }
    );
  });
}
/* */
function update_tl(
  province_id,
  rice_id,
  start_date, //startDate
  current_date, // Date now (after midnight)
  next_day, // order
  old_timeline,
  test_mode,
  test_data
) {
  return new Promise((resolve) => {
    const payload = {
      province_id: province_id,
      rice_id: rice_id,
      start_date: start_date,
      current_date: current_date,
      next_day: next_day,
      old_timeline: old_timeline,
      test_mode: test_mode,
      test_data: test_data,
    };
    /*console.log(start_date);
    console.log(current_date);
    console.log(next_day);*/
    console.log(payload);
    //let url_callback = "http://192.168.1.101:3000/api/varieties/eval";
    request(
      {
        url: "http://150.95.88.242:10005/update_timeline",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        formData: {
          province_id: province_id,
          rice_id: rice_id,
          start_date: start_date,
          current_date: current_date,
          next_day: next_day,
          old_timeline: old_timeline,
          test_mode: test_mode,
          test_data: test_data,
        },
      },
      function (err, resp, body) {
        if (err) resolve("Error");
        if (resp) console.log("OK");
        if (body) {
          //console.log(body);
          resolve(JSON.parse(body));
        }
      }
    );
  });
}

//predict_tl();
module.exports.update_tl = update_tl;
module.exports.predict_tl = predict_tl;
