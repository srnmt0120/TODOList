import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグ生成
  const li = document.createElement("li");

  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了から完了したTODOにうつす
    //完了リストに追加
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    
    const li = document.createElement('li');
    li.innerText = text;
    
    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    
    documen.getElementById('complete-area').appendChild(addTarget);
    
    //未完了リストから削除
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  //liタグの下にdivを置く
  li.appendChild(div);

  //divタグの下にpとボタンタグを置く
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
