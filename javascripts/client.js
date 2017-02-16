$.ajax({
  url: "https://data.nasa.gov/resource/tfkf-kniw.json?countrycode=US",
  data: {},
  success: function(data) {
    $("pre").text(JSON.stringify(data, null, "\t"));
  },
  error: function(msg) {
    //todo: handle error gracefully
  }
});
