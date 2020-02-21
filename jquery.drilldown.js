/**
 * jquery.drilldown
 *
 * 【概要】
 * 階層としているプルダウンを選択値により連動させるjQueryプラグインです。
 *
 * 【親子の関連付け方法】
 * 子のクラス名に、"data-parent='親番号'" を付与して下さい。
 *（例：data-parent='1')
 *
 * 【セレクトメニューの命名規則】
 * selectのnameは任意でOK。idは必ず「lv」を接頭語とし、以下数値を付ける形で一意の名称にして下さい。
 * 連動させるセレクトメニューには同じclass名を付けて下さい。
 *（例：<select name="sample1" id="lv1" class="group1"> ）
 *
 * 【HTMLに記載するオプションの記述方法】
 *  $(function(){
 *      $(this).drilldown({
 *          group: 'group1',          ←★グループ名
 *          maxLevel: '5',            ←★最下層とするセレクトメニューの階層数。この場合は5階層となる
 *          defaultSelect: '▼選択',  ←★デフォルトのオプション内容
 *      });
 *  });
 *
 * @MIT : wdkta3 https://github.com/wdkta3/jquery-drilldown
 * @Version   : 1.0
 * @Modified  : 2020-02-20
 *
 */

(function( $ ) {
    $.fn.drilldown = function(option) {

        var opts = $.extend($.fn.drilldown.defaults, option);
        var list = [];
        var selectList = [];

        return this.each(function () {
            $('html').find('select.' + opts.group).each( function() {
                // IDを取得
                var lvTxt = $(this).attr('id').replace(/lv/, "");

                //　セレクト直下のoptionをコピー
                list[lvTxt] = $('#lv' + lvTxt + ' option').clone();

                // セレクトボックス選択処理
                $('#' + this.id).on('change', function () {

                    // オプション選択値
                    var selectVal = $(this).val();

                    //現在のレベル値と次の掘り下げレベルを取得
                    var currentLvNum = parseInt($(this).attr('id').replace(/lv/, ""));
                    var nextLvNum = currentLvNum + 1;

                    // プルダウン操作
                    $('#lv'+ nextLvNum + ' option').remove(); // 子プルダウンのオプションを全削除


                    // 選択した番号から紐づいてる子要素を取得
                    if((list[nextLvNum])) {
                        selectList = list[nextLvNum].map(function (index, element) {
                            // data-parent属性に紐づいているIDとdefault選択値を取得
                            if($(this).data('parent') == selectVal || index == 0) {
                                return element;
                            }
                            return null;
                        });
                    }

                    $('#lv'+ nextLvNum)
                        .prop("disabled", false) // 子プルダウンの"disabled"解除
                        .append(selectList); // クローンした要素を追加

                    // 変更したプルダウン以下の子プルダウンを全てdisabledに
                    if((nextLvNum + 1) <= opts.maxLevel){
                        for(i = nextLvNum + 1; i <= opts.maxLevel; i++){
                            $('#lv' + i).prop('disable', false);
                        }
                    }
                });
            });
        });
    };
})( jQuery );
