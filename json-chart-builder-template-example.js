window.onload = function() {
  document.getElementById("graph-data-template").textContent = { 
    "style":[
      {"class":"c-10","settings":"width: 1200px; height: 130px; background-color: #f0f2f5;display: flex;justify-content: space-between;"},
      {"class":"c-10-1","settings":"width: 33%; height: 145px; display: inline-block;"},
      {"class":"c-10-1-1","settings":"width: 99%;"},
      {"class":"c-10-1-2-2","settings":"display:inline-block; margin-right: 15px;"},
      {"class":"c-10-1-2-3","settings":"width: 18px; height: 18px;display: inline-block;"},
      {"class":"c-10-1-2-4","settings":"display:none;"},
      {"class":"c-10-1-2-3:hover + .c-10-1-2-4","settings":"display:inline-block; width:400px; position:absolute; border: 2px solid #e6e6e6; box-shadow: 2px 2px #e6e6e6; background-color:white;margin-left:10px;z-index: 1; padding:5px;"},
      {"class":"c-10-1-3","settings":"margin-top:10px;"},
      {"class":"c-10-1-3-1","settings":"width: 35px; height: 35px; border-radius:50%; font-size: 30px; text-align: center; display: inline-block"},
      {"class":"c-10-1-3-2","settings":"font-size: 15px; text-align: left; display: inline-block;padding-left: 5px;"},
      {"class":"c-11","settings":"width: 1200px; height: 130px; display: flex;justify-content: space-between;"},
      {"class":"c-12","settings":"width: 1200px; height: 10px;background-color:#f0f2f5;"},
      {"class":"c-13","settings":"width: 1200px; height: 35px;border-bottom: 1px solid #f0f2f5; vertical-align: middle;line-height: 35px;"},
      {"class":"c-14","settings":"width: 1200px; height: 250px;"},
      {"class":"c-17","settings":"width: 1200px; height: 200px; display: flex; margin-bottom:20px;"},
      {"class":"c-17-1","settings":"width: 50%; height: 200px; margin-left:15px; margin-top:20px;"},     
      {"class":"c-17-2","settings":"width: 250px; height: 200px; display: inline-block; margin-left:30px;"},  
      {"class":"c-17-2-3","settings":"background-color:#f0f2f5;padding:5px;margin-top:10px;width:240px;"},        
      {"class":"c-20-1-1","settings":"width: 99%; height: 15px; margin-top: 30px;margin-bottom:20px;"},
      {"class":"c-20-1-2","settings":"width:99%;margin-top:5px;"},
      {"class":"c-20-1-2-1","settings":"width: 8px; height: 18px;background-color:#34cc00;display:inline-block;"},
      {"class":"c-20-1-2-2","settings":"display:inline-block;margin-left:5px;"},
      {"class":"c-20-1-2-3","settings":"display:inline-block;float:right;margin-right:35px;"},
      {"class":"c-20-1-3-1","settings":"width: 8px; height: 18px;background-color:#ffa940;display:inline-block;"},
      {"class":"c-20-1-4-1","settings":"width: 8px; height: 18px;background-color:#ff7775;display:inline-block;"},
      {"class":"c-20-1-5-1","settings":"width: 8px; height: 18px;background-color:#cf1222;display:inline-block;"}
      ],
    "elements":[      
      {"index":26,"type":"div","id":"i-10","class":"c-10","parent":"graph-div","html":""},
      {"index":27,"type":"div","id":"i-10-1","class":"c-10-1","parent":"i-10","html":""},
      {"index":28,"type":"div","id":"i-10-1-1","class":"c-10-1-1","parent":"i-10-1","html":""},
      {"index":29,"type":"div","id":"i-10-1-2","class":"c-10-1-1","parent":"i-10-1","html":""},
      {"index":30,"type":"div","id":"i-10-1-2-1","class":"c-10-1-2-2","parent":"i-10-1-2","html":"Reliablility Score"},
      {"index":31,"type":"img","id":"i-10-1-2-2","class":"c-10-1-2-3","parent":"i-10-1-2","src":"https://info.shorts.uk.com/hubfs/Canva%20images/additional_info_icon.png"},
      {"index":32,"type":"div","id":"i-10-1-2-3","class":"c-10-1-2-4","parent":"i-10-1-2","html":"<b>How do we set the reliability score?</b><br>The reliability score rating is an aggregate score based on the factors you set as most important<br><br>A 94-100<br>B 85-94<br>C 65-84<br>D below 65<br><br><b>How is the growth or decline rate determined?</b><br>It is determined by comparing the selected time frame with the corresponding prior period and calculating the percentage difference to identify the increase or decrease."},
      {"index":33,"type":"div","id":"i-10-1-3","class":"c-10-1-3","parent":"i-10-1","html":""},
      {"index":34,"type":"div","id":"i-10-1-3-1","class":"c-10-1-3-1","parent":"i-10-1-3","html":""},
      {"index":35,"type":"div","id":"i-10-1-3-2","class":"c-10-1-3-2","parent":"i-10-1-3","html":"70-84"},
      {"index":27,"type":"div","id":"i-10-2","class":"c-10-1","parent":"i-10","html":""},
      {"index":28,"type":"div","id":"i-10-2-1","class":"c-10-1-1","parent":"i-10-2","html":""},
      {"index":29,"type":"div","id":"i-10-2-2","class":"c-10-1-1","parent":"i-10-2","html":""},
      {"index":30,"type":"div","id":"i-10-2-2-1","class":"c-10-1-2-2","parent":"i-10-2-2","html":"Completed PO lines in SourceDay"},
      {"index":27,"type":"div","id":"i-10-3","class":"c-10-1","parent":"i-10","html":""},
      {"index":28,"type":"div","id":"i-10-3-1","class":"c-10-1-1","parent":"i-10-3","html":""},
      {"index":29,"type":"div","id":"i-10-3-2","class":"c-10-1-1","parent":"i-10-3","html":""},
      {"index":30,"type":"div","id":"i-10-3-2-1","class":"c-10-1-2-2","parent":"i-10-3-2","html":"Completed spend on SourceDay"},
      {"index":26,"type":"div","id":"i-11","class":"c-11","parent":"graph-div","html":""},
      {"index":27,"type":"div","id":"i-11-1","class":"c-10-1","parent":"i-11","html":""},
      {"index":28,"type":"div","id":"i-11-1-1","class":"c-10-1-1","parent":"i-11-1","html":""},
      {"index":29,"type":"div","id":"i-11-1-2","class":"c-10-1-1","parent":"i-11-1","html":""},
      {"index":30,"type":"div","id":"i-11-1-2-1","class":"c-10-1-2-2","parent":"i-11-1-2","html":"On-time percentage"},
      {"index":31,"type":"img","id":"i-11-1-2-2","class":"c-10-1-2-3","parent":"i-11-1-2","src":"https://info.shorts.uk.com/hubfs/Canva%20images/additional_info_icon.png"},
      {"index":32,"type":"div","id":"i-11-1-2-3","class":"c-10-1-2-4","parent":"i-11-1-2","html":"<b>On-time delivery</b><br><br>This metric measures how often items are received or shipped on or before the expected delivery date, based on account settings. If adjusted due date workflow is enabled, it uses shipment records; otherwise, it uses receipt records. Settings like the Supplier Scorecard 'Late Status Based On' field and early delivery penalties are factored in. The calculation averages on-time deliveries for each receipt or shipment, with multiple deliveries on a single PO line being calculated separately. The timeframe is based on receipt or shipment dates."},
      {"index":33,"type":"div","id":"i-11-1-3","class":"c-10-1-3","parent":"i-11-1","html":""},
      {"index":34,"type":"div","id":"i-11-1-3-1","class":"c-10-1-3-1","parent":"i-11-1-3","html":""},
      {"index":35,"type":"div","id":"i-11-1-3-2","class":"c-10-1-3-2","parent":"i-11-1-3","html":"70-84"},
      {"index":27,"type":"div","id":"i-11-2","class":"c-10-1","parent":"i-11","html":""},
      {"index":28,"type":"div","id":"i-11-2-1","class":"c-10-1-1","parent":"i-11-2","html":""},
      {"index":29,"type":"div","id":"i-11-2-2","class":"c-10-1-1","parent":"i-11-2","html":""},
      {"index":30,"type":"div","id":"i-11-2-2-1","class":"c-10-1-2-2","parent":"i-11-2-2","html":"Responsiveness"},
      {"index":31,"type":"img","id":"i-11-2-2-2","class":"c-10-1-2-3","parent":"i-11-2-2","src":"https://info.shorts.uk.com/hubfs/Canva%20images/additional_info_icon.png"},
      {"index":32,"type":"div","id":"i-11-2-2-3","class":"c-10-1-2-4","parent":"i-11-2-2","html":"<b>Responsiveness</b><br><br>This metric measures the percentage of buyer requests on a purchase order line that receive a supplier response. The measurement is taken after the purchase order is completed, ensuring theres a receipt, shipment, or completion status. ERP system changes also trigger supplier responses, though these changes arent visible in the order history. The time counted begins when the buyer takes action and ends when the supplier responds. "},
      {"index":33,"type":"div","id":"i-11-2-3","class":"c-10-1-3","parent":"i-11-2","html":""},
      {"index":34,"type":"div","id":"i-11-2-3-1","class":"c-10-1-3-1","parent":"i-11-2-3","html":""},
      {"index":35,"type":"div","id":"i-11-2-3-2","class":"c-10-1-3-2","parent":"i-11-2-3","html":"70-84"},
      {"index":27,"type":"div","id":"i-11-3","class":"c-10-1","parent":"i-11","html":""},
      {"index":28,"type":"div","id":"i-11-3-1","class":"c-10-1-1","parent":"i-11-3","html":""},
      {"index":29,"type":"div","id":"i-11-3-2","class":"c-10-1-1","parent":"i-11-3","html":""},
      {"index":30,"type":"div","id":"i-11-3-2-1","class":"c-10-1-2-2","parent":"i-11-3-2","html":"Price variance"},
      {"index":31,"type":"img","id":"i-11-3-2-2","class":"c-10-1-2-3","parent":"i-11-3-2","src":"https://info.shorts.uk.com/hubfs/Canva%20images/additional_info_icon.png"},
      {"index":32,"type":"div","id":"i-11-3-2-3","class":"c-10-1-2-4","parent":"i-11-3-2","html":"<b>Price variance</b><br><br>The metric measures the difference between the actual unit cost of a purchase order line (converted to USD) and a baseline value, which can be either historical averages or negotiated list prices. This difference is then multiplied by the quantity received to assess the total impact over a given time period. The baseline used is flexible, allowing for comparison with various reference points. "},
      {"index":33,"type":"div","id":"i-11-3-3","class":"c-10-1-3","parent":"i-11-3","html":""},
      {"index":34,"type":"div","id":"i-11-3-3-1","class":"c-10-1-3-1","parent":"i-11-3-3","html":""},
      {"index":35,"type":"div","id":"i-11-3-3-2","class":"c-10-1-3-2","parent":"i-11-3-3","html":"70-84"},
      {"index":26,"type":"div","id":"i-12","class":"c-12","parent":"graph-div","html":""},
      {"index":26,"type":"div","id":"i-13","class":"c-13","parent":"graph-div","html":"<b>How does this supplier compare to my SourceDay supplier network?</b>"},
      {"index":26,"type":"div","id":"i-14","class":"c-14","parent":"graph-div","html":""},
      {"index":26,"type":"div","id":"i-15","class":"c-12","parent":"graph-div","html":""},
      {"index":26,"type":"div","id":"i-16","class":"c-13","parent":"graph-div","html":"<b>How late or early are my orders?</b>"},
      {"index":26,"type":"div","id":"i-17","class":"c-17","parent":"graph-div","html":""},
      {"index":26,"type":"div","id":"i-17-1","class":"c-17-1","parent":"i-17","html":""},
      {"index":26,"type":"div","id":"i-17-2","class":"c-17-2","parent":"i-17","html":""},
      {"index":26,"type":"div","id":"i-17-2-1","class":"c-10-1-1","parent":"i-17-2","html":""},
      {"index":30,"type":"div","id":"i-17-2-2","class":"c-10-1-2-2","parent":"i-17-2","html":"Average of all POs"},
      {"index":26,"type":"div","id":"i-17-2-3","class":"c-17-2-3","parent":"i-17-2","html":""},
      {"index":26,"type":"div","id":"i-18","class":"c-12","parent":"graph-div","html":""},
      {"index":26,"type":"div","id":"i-19","class":"c-13","parent":"graph-div","html":"<b>How often does this supplier change the due date?</b>"},
      {"index":26,"type":"div","id":"i-20","class":"c-17","parent":"graph-div","html":""},
      {"index":26,"type":"div","id":"i-20-1","class":"c-17-1","parent":"i-20","html":""},
      {"index":26,"type":"div","id":"i-20-1-1","class":"c-20-1-1","parent":"i-20-1","html":""},
      {"index":26,"type":"div","id":"i-20-1-2","class":"c-20-1-2","parent":"i-20-1","html":""},
      {"index":26,"type":"div","id":"i-20-1-2-1","class":"c-20-1-2-1","parent":"i-20-1-2","html":""},
      {"index":26,"type":"div","id":"i-20-1-2-2","class":"c-20-1-2-2","parent":"i-20-1-2","html":"No changes"},
      {"index":26,"type":"div","id":"i-20-1-2-3","class":"c-20-1-2-3","parent":"i-20-1-2","html":"15,205"},
      {"index":26,"type":"div","id":"i-20-1-3","class":"c-20-1-2","parent":"i-20-1","html":""},
      {"index":26,"type":"div","id":"i-20-1-3-1","class":"c-20-1-3-1","parent":"i-20-1-3","html":""},
      {"index":26,"type":"div","id":"i-20-1-3-2","class":"c-20-1-2-2","parent":"i-20-1-3","html":"1 change"},
      {"index":26,"type":"div","id":"i-20-1-3-3","class":"c-20-1-2-3","parent":"i-20-1-3","html":"15,205"},
      {"index":26,"type":"div","id":"i-20-1-4","class":"c-20-1-2","parent":"i-20-1","html":""},
      {"index":26,"type":"div","id":"i-20-1-4-1","class":"c-20-1-4-1","parent":"i-20-1-4","html":""},
      {"index":26,"type":"div","id":"i-20-1-4-2","class":"c-20-1-2-2","parent":"i-20-1-4","html":"2 changes"},
      {"index":26,"type":"div","id":"i-20-1-4-3","class":"c-20-1-2-3","parent":"i-20-1-4","html":"15,205"},
      {"index":26,"type":"div","id":"i-20-1-5","class":"c-20-1-2","parent":"i-20-1","html":""},
      {"index":26,"type":"div","id":"i-20-1-5-1","class":"c-20-1-5-1","parent":"i-20-1-5","html":""},
      {"index":26,"type":"div","id":"i-20-1-5-2","class":"c-20-1-2-2","parent":"i-20-1-5","html":"3 or more changes"},
      {"index":26,"type":"div","id":"i-20-1-5-3","class":"c-20-1-2-3","parent":"i-20-1-5","html":"15,205"},
      {"index":26,"type":"div","id":"i-20-2","class":"c-17-1","parent":"i-20","html":""},
      {"index":26,"type":"div","id":"i-20-2-1","class":"c-17-2","parent":"i-20-2","html":""},
      {"index":26,"type":"div","id":"i-20-2-1-1","class":"c-10-1-1","parent":"i-20-2-1","html":""},
      {"index":30,"type":"div","id":"i-20-2-1-2","class":"c-10-1-2-2","parent":"i-20-2-1","html":"Due date changed"},
      {"index":26,"type":"div","id":"i-20-2-1-3","class":"c-17-2-3","parent":"i-20-2-1","html":""},
      {"index":26,"type":"div","id":"i-20-2-2","class":"c-17-2","parent":"i-20-2","html":""},
      {"index":26,"type":"div","id":"i-20-2-2-1","class":"c-10-1-1","parent":"i-20-2-2","html":""},
      {"index":30,"type":"div","id":"i-20-2-2-2","class":"c-10-1-2-2","parent":"i-20-2-2","html":"Average total change"},
      {"index":26,"type":"div","id":"i-20-2-2-3","class":"c-17-2-3","parent":"i-20-2-2","html":""}
      ]
  }
}
