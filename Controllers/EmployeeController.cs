using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.IO;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tracquire.Model;

namespace Tracquire.Controllers
{
    [ApiController]
    [Route("/api/Employee")]
    public class AddEmployeeController : Controller
    {

        [HttpPost]
        public async Task<IActionResult> InsertData([FromBody]Object data)
        {
            Console.WriteLine(data.ToString());
            var jsonData = JsonConvert.SerializeObject(data.ToString());
            var fileDataAsJson = JsonConvert.DeserializeObject(data.ToString());

            string jsonData2 = System.IO.File.ReadAllText(@"C:\Bhushan\Ruby Training Project\Tracquire\Tracquire\Json\DataBase.json");
            JObject jsonDataObject = JObject.Parse(jsonData2);
            JArray listToAppendTo = (JArray)jsonDataObject["DataList"];

            listToAppendTo.Add(fileDataAsJson);

            string updatedJsonData = jsonDataObject.ToString();

            using (var writer = new StreamWriter(@"C:\Bhushan\Ruby Training Project\Tracquire\Tracquire\Json\DataBase.json"))
            using (var jsonWriter = new JsonTextWriter(writer))
            {
                jsonDataObject.WriteTo(jsonWriter);
            }
            var hello = "hello";
            var t = hello.ToLower();


            return Ok(data);
        }

        [HttpGet]

        public async Task<IActionResult> getData()
        {
            string jsonData2 = System.IO.File.ReadAllText(@"C:\Bhushan\Ruby Training Project\Tracquire\Tracquire\Json\DataBase.json");
            JObject jsonDataObject = JObject.Parse(jsonData2);
            JArray listOfJsonData = (JArray)jsonDataObject["DataList"];

            return Ok(listOfJsonData.ToString());
        }
    }
}
