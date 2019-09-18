
/* Smart HTML Elements v4.4.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Grid.Filter",class{addFilter(a,b,c){const d=this,e=d.columnByDataField[a];e&&e.canNotify&&(e.setProperty("filter",b),!1!==c&&d.refreshFilters())}removeFilter(a,b){const c=this,d=c.columnByDataField[a];d&&d.canNotify&&(d.setProperty("filter",null),!1!==b&&c.refreshFilters())}clearFilter(){const a=this;for(let b=0;b<a.columns.length;b++){const c=a.columns[b];c.setProperty("filter",null)}a.refreshFilters()}getFilteredColumns(){const a=this;if(a._filters){const b=[];for(let c=0;c<a._filters.length;c++){const d=a._filters[c];b[d[0]]=d[1],b.length++}return b}return[]}getVisibleRows(){const a=this;if(a._visibleRows)return a._visibleRows;const b=[],c=a._viewRows,d=a.editing.addNewRow.visible&&"far"!==a.editing.addNewRow.position?1:0;for(let a=0;a<c.length;a++){const e=c[a];e.canNotify=!1,e.visibleIndex=-1,e.visible&&(!1!==e.filtered||void 0===e.filtered)&&(e.visibleIndex=b.length-d,b.push(e)),e.canNotify=!0}return a._visibleRows=b,b}refreshFilters(){const a=this,b=[];for(let c=0;c<a.columns.length;c++){const d=a.columns[c];d.filter&&b.push([d.dataField,d.filter])}a.scrollTop=0,a.closeMenu(),a.dataSource&&!a.dataSource.onFilter&&(a.dataSource.onFilter=function(){const b=a._viewRows;for(let a=0;a<b.length;a++){const c=b[a];c.data&&!c.addNewRow&&(c.filtered=!(c.data.$.filtered!==void 0)||c.data.$.filtered)}a.refresh()}),a._filters=b,a._visibleRows=null,a.dataSource&&a.dataSource.virtualDataSource?(a.closeMenu(),a._virtualDataRequest("filter")):a.dataSource._filter(b),a.paging.enabled&&a.dataSource&&!a.dataSource.virtualDataSource&&a._refreshPagesCount(),a.$.fireEvent("filter",{data:a.getFilteredColumns()})}});