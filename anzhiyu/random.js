var posts=["2025/03/16/opensource_tools/","2025/03/17/test/","2025/03/16/三大模型测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };