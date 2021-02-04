const followers = document.querySelectorAll('.followers');

followers.forEach((follower) => {
  follower.innerText = '0';

  const updateFollowers = () => {
    const target = +follower.getAttribute('data-target');
    // console.log(typeof target, target);
    const f = +follower.innerText;

    const increment = target / 100;

    if (f < target) {
      follower.innerText = `${Math.ceil(f + increment)}`;
      setTimeout(updateFollowers, 20);
    } else {
      follower.innerText = target;
    }

    console.log(increment);
  };

  updateFollowers();
});
