# Interactive-Plot
## Animated Map

### Some instructions:

You can see my work by opening these two files: try.html, stateMap.html
	The first one is for homework requirement and the second one is for bonus point.

For try.html, you can highlight the graph by clicking the lines, and off the highlight by double clicking somewhere else on the plot. 
You can hide lines by clicking the “Hide Lines” button. To see any particular lines, you can double click the legend to hide all the 
lines except for the one that you chose, and then choose any additional line you want by clicking them. 

For stateMap.html, a red color means a relatively good condition of the county; a green color means a relatively bad condition of the county. 
You may need to wait for 30 seconds to notice some apparent color changes, because all the counties are in a “good” condition at the beginning.


### Introduction

In this report, I will introduce the way I plot the interactive plot of daily COVID-19 cases in California counties and an animated map which shows the dynamic changes of severity of counties. I would divide my following report into several sections: web scraping COVID-19 data, plot the daily case line graph, plot interaction, creating the map of CA, making animated map.

### web scraping COVID-19 data

The instructor has finished most part of web scraping, allowing us to get all the regions’ information. Therefore, what I should do is to extract all the counties that belongs to CA and store them in a data frame. The way I found CA counties are based on their hierarchy: all CA counties has a hierarchy of "USA-06". Then, I created lists of cumulative cases, cumulative deaths, daily cases, and daily deaths. What we already have is the cumulative value, hence we need to difference the current cumulative value and its “yesterday” value. The code example of differencing is shown below (the form and variable names may be different from my real codes, but the logic of both are exactly the same):
```
Today = as.vector(County[[j]]$cases)
Yesterday = c(0, as.vector(County[[j]]$cases))
Daily = Today - Yesterday[1:length(as.vector(County[[j]]$cases))]
```
After getting all the data, I stored them in several data frames, in which column names are county names or state names (California), and the values are cumulative cases, cumulative deaths, daily cases, or daily deaths.
```
df2 = as.data.frame(list.cbind(Dcases))
colnames(df2) = as.vector(Countyname)
```
Then, I inserted a new column of dates into these data frames:
```
timerange = seq(as.Date(CA_data$range[1]), as.Date(CA_data$range[2]), by = "day")
df$time = timerange
```
Now we have all the structured values, and what we need to do is to print a ggplot and to show the variation of daily cases. As we know, the ggplot can only print given values of x and y, so our data frame cannot let ggplot print all the counties and their daily cases in different dates. Therefore, I converted the original data frame by only having three columns: names of counties, daily cases, and dates:
```
finaldata = melt(df2, id.vars='time')
```
And the “finaldata” is ready to be used for ggplot.



plot the line graph of daily cases

I created a line plot of daily cases. Here I also would like to highlight a line when clicking it, and show the tooltip with information of the county name, daily cases, and date:
```
k = highlight_key(finaldata, ~variable)
pl = ggplot(data = k, aes(time, value, col = variable)) + geom_line()
plty = ggplotly(pl, tooltip = c("variable", "time", "value"))
graph = highlight(plty, on = "plotly_click", off = "plotly_doubleclick")
```
Then, I saved the plot as a HTML file, and then start to get more interactions by modifying HTML and using JavaScript codes:
```
saveWidget(graph, "try.html", selfcontained = FALSE)
```


### plot interaction

Firstly, I want to have the tooltips for each observation show the date, number of cases and deaths for that day and the pro-rated values. So, I need to get the data of pro-rated values. I downloaded the population data of each county in CA from a website (named Book2.xlsx), and then created a loop to divide each county’s daily cases by its population. Here the counties are all alphabetically ordered; hence I don’t need to do match the county names. Also, since the pro-rated values are really small, I multiplied all the values by 10000:
```
Pop = read_excel("~/Desktop/UCD/Third Year/sta141b/hw5/Book2.xlsx")
Pop$California = CA_data$population
Pop = do.call("rbind", replicate(nrow(df2), Pop, simplify = FALSE))
Pop = as.data.frame(Pop)
pro = list()
for( i in (1:length(County))){
  pro[[i]] = round(df2[,i]/Pop[,i]*10000,2)  ##pro_rate
}
df4 = as.data.frame(list.cbind(pro))
colnames(df4) = as.vector(Countyname)
```
### Tooltips:
Now I started to create the tooltips by modifying the codes “ShowColumn.js” given by the instructor. I firstly created a new JaveScript variable “cumulcases”, and then let it substitute the original variable “mtcar”. The way that I create “cumulcases” is by convert the R data frame “t” into a js form. This data frame contains all information of each county on each day. Here, the df, df1, df2, df3, df4 represents for cumulative cases, cumulative deaths, daily cases, daily deaths and pro-rated value, respectively.
```
tooldata = list()
for (c in 1 : length(County)){
tooldata[[c]] = as.vector(paste(df$time, df[,c],df1[,c],df2[,c],df3[,c],df4[,c],sep= "; "))
}
t = as.data.frame(tooldata)
colnames(t) = as.vector(Countyname)
```
### Hide Line Botton:
I used hidelines() function given by the instructor, and it works. 

The last step is to modify the HTML to include all the functions and files that I created in the web page. You can have a look to see my HTML content by opening the file “try.html”.

creating the map of CA
I created the map of CA by using the following R codes. As you can see, I set the map to show the counties in CA, and it will show the county name when hovering that region. Also, I saved the plot as "stateMap.html".
```
mapStates = map("county", fill = TRUE, plot = FALSE, regions = "CA")
p = leaflet(data = mapStates)
p = addTiles(p)
w = addPolygons(p, fillColor = topo.colors(10, alpha = NULL), stroke = FALSE,
                layerId = mapStates$names,
                label = mapStates$names)

saveWidget(w, "stateMap.html", selfcontained = FALSE)
```
### making animated map

In the lecture, we have successfully finished animating one state in the US map. Here in my case, I firstly tried to simply add the “setColor6.js”, which is given by the instructor, into my HTML file. And not surprisingly, there is only one county that has been colored and animated in the CA map. Then I found that variable “ca” could control which county to be colored and animated by changing its index. In the following example, if I change the index from 0 to 1, it will change to color another county:
```
var ca = paths.snapshotItem(0);
```
This is a very useful finding, because if we can set the index from 0 to 57, we can animate all the counties. However, in here, each county has different data, hence I need to convert the daily cases of each county into corresponding colors. Then, I need to loop over all colors in the color vector for each county.

To create the color vector, I firstly transformed the pro-rated values into values with range from 0 to 1:
```
data = rescale(df4[,m], to = c(0,1))
```
Then, I set the color for each transformed value. As you can see, when the transformed value is less than 0.5, the color looks red; when the transformed value is more than 0.5, the color looks green. Then I converted the data frame into a js form:
```
Dcolor[[m]] = rgb(1-data,data,1)
Dcolor = as.data.frame(list.cbind(Dcolor))
cat("var CACols =", toJSON(Dcolor), ";", file = "2.js")
```
Now I can modify the “setColor6.js” by adding all the attributes of county:
```
   var ca = paths.snapshotItem(0);
   console.log("setColor:" + day + " " + ca + " " + CACols["V1"][i]);
   ca.setAttribute("fill", CACols["V1"][i]);
   
   var ca1 = paths.snapshotItem(1);
   console.log("setColor:" + day + " " + ca1 + " " + CACols["V2"][i]);
   ca1.setAttribute("fill", CACols["V2"][i]);
   
   var ca2 = paths.snapshotItem(2);
   console.log("setColor:" + day + " " + ca2 + " " + CACols["V3"][i]);
   ca2.setAttribute("fill", CACols["V3"][i]);
	 …
	 …
   var ca58 = paths.snapshotItem(57);
   console.log("setColor:" + day + " " + ca2 + " " + CACols["V58"][i]);
   ca2.setAttribute("fill", CACols["V58"][i]);
```

Notice that the vectors “V1, V2, …, V58” represents for the color vectors in variable “CACols”. “i” represents for the ith color in the vector, aiming to show the COVID-19 condition of the ith day. Therefore, I created a loop to set “i” from 1 to 285, and 285 is the length of each color vector:
```
    if(i == 285) {
	clearInterval(timer);
	timer = null;
}
```
Now, we have successfully animated the color for each county over time.

