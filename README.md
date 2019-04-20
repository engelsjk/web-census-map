https://www.census.gov/cgi-bin/geo/shapefiles/index.php

https://github.com/mbloch/mapshaper
mapshaper data/shapefiles/tl_2018_us_state/tl_2018_us_state.shp -o data/states.json format=topojson bbox

mapshaper data/shapefiles/tl_2018_us_county/tl_2018_us_county.shp -o data/counties.json format=topojson bbox

mapshaper data/shapefiles/tl_2018_39_tract/tl_2018_39_tract.shp -o data/tracts-39.json format=topojson bbox

mapshaper data/shapefiles/tl_2018_39_bg/tl_2018_39_bg.shp -o data/blockgroups-39.json format=topojson bbox

mapshaper data/shapefiles/tl_2018_39_bg/tl_2018_39_bg.shp -o data/blocks-39.json format=topojson bbox

https://bl.ocks.org/almccon/410b4eb5cad61402c354afba67a878b8

