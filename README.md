# jquery-drilldown
階層型セレクトボックスの連動プラグイン

 # Getting Started
 - git clone git@github.com:wdkta3/jquery-drilldown.git
 
 # Requirement
 ```
 jquery.js
 ```
 
 # installation
 include files:
 ```
 <script src="/path/to/jquery.js"></script><!-- jQuery is required -->
 <script src="/path/to/jquery-drilldown.js"></script>
 ```
 
 # Usage
 ```
  $(this).drilldown({
     group: 'group1', // setting class name
     maxLevel: '5',  //  Hierarchy level maximum
     defaultSelect: '-please select-' // selected default
  });
 ```
 firstLevel SelectBox
 ```
 <select name="example1" id="lv1" class="group1">
     <option value="0" selected="selected">-please select-</option>
     <option value="1">sample1</option>
     <option value="2">sample2</option>
     <option value="3">sample3</option>
 </select>
```
 
 nextLevel SelectBox
 ```
 <select name="example2" id="lv2" class="group1" disabled="disabled">
     <option value="0" selected="selected">-please select-</option>
     <option value="1" data-parent="1">sample1</option>
     <option value="2" data-parent="1">sample2</option>
     <option value="3" data-parent="2">sample3</option>
 </select>
```

MaxLevel 5 Hierarchy Select Box 
 
 # License
 [MIT](https://github.com/tcnksm/tool/blob/master/LICENCE) [wdkta3](https://github.com/wdkta3)



