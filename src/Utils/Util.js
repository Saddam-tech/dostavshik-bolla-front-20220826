export function onClickPreBtn(ref, itemList, index, setIndex) {
  if (!ref.current.children) return;

  const wrapWidth = ref.current.offsetWidth;
  const contWidth = ref.current.children[0].offsetWidth;
  const itemNumByPage = Math.floor(wrapWidth / contWidth);
  const pageNum = Math.ceil(itemList.length / itemNumByPage);

  if (index > 0) setIndex(index - 1);
  else setIndex(pageNum - 1);
}

export function onClickNextBtn(ref, itemList, index, setIndex) {
  if (!ref.current.children) return;

  const wrapWidth = ref.current.offsetWidth;
  const contWidth = ref.current.children[0].offsetWidth;
  const itemNumByPage = Math.floor(wrapWidth / contWidth);
  const pageNum = Math.ceil(itemList.length / itemNumByPage);
  if (index < pageNum - 1) setIndex(index + 1);
  else setIndex(0);
}
