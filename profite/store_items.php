<?php
    session_start();

    if(isset($_POST['total_cart_items']))
    {
  	 echo count($_SESSION['name']);
  	 exit();
    }

    if(isset($_POST['item_src']))
    {
      $_SESSION['name'][]=$_POST['item_name'];
      $_SESSION['price'][]=$_POST['item_price'];
      $_SESSION['src'][]=$_POST['item_src'];
      echo count($_SESSION['name']);
      exit();
    }

    if(isset($_POST['showcart']))
    {
      for($i=0;$i<count($_SESSION['src']);$i++)
      {
        echo "<div class='cart_items'>";
        echo "<img src='".$_SESSION['src'][$i]."'>";
        echo "<div><p>".$_SESSION['name'][$i]."</p>";
        echo "<p>R$".$_SESSION['price'][$i]."</p></div>";
        echo "</div>";
      }
    }

    $sum = 0;
    foreach($_SESSION['price'] as $key=>$value)
    {
         $sum+= $value;
    }  

    $_SESSION['total'] = $sum;

    echo "<div class='total'><p>Total: R$ ".$sum."</p></div>";
?>

