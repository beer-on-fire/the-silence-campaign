
  var date = {
      isDuringDate: function (beginDateStr, endDateStr) {
          var curDate = new Date(),
              beginDate = new Date(beginDateStr),
              endDate = new Date(endDateStr);
          if (curDate >= beginDate && curDate <= endDate) {
              (function () {
                  const replacement = '\u{25a0}';
                  function replaceText(text) {
                      const originalLength = text.length;
                      return replacement.repeat(originalLength);
                  }

                  function silence(elementOrNode) {
                      if (elementOrNode instanceof Text) {
                          if (elementOrNode.textContent.trim()) {
                              elementOrNode.textContent = replaceText(elementOrNode.textContent);
                          }
                          return;
                      }

                      // Handle the special elements.
                      if (elementOrNode instanceof HTMLInputElement) {
                          elementOrNode.value = replaceText(elementOrNode.value);
                      } else if (elementOrNode instanceof HTMLAnchorElement) {
                          elementOrNode.title = replaceText(elementOrNode.title);
                      }

                      for (const child of elementOrNode.childNodes) {
                          silence(child);
                      }
                  }

                  silence(document.body);
              })()
          }
          return false;
      }
    }
  //设置生效日期区间
  date.isDuringDate('2022/11/05', '2022/12/01')
