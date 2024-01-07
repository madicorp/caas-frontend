<template>
  <PageHeaderLayout title="DEVIS">
    <section class="shopping_cart bg-dark-200">
      <div class="container">
        <div class="shipping_form">
          <form action="checkout.php" method="POST">
            <div class="row">
              <div class="col-lg-7 pe-5">
                <h4 class="widget-title">Billing Address <span class="title-line"></span></h4>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="fname">First Name *</label>
                      <input type="text" class="form-control" id="fname" name="fname" placeholder="First Name">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="lname">Last Name *</label>
                      <input type="text" class="form-control" id="lname" name="lname" placeholder="Last Name">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="cname">Company Name (Optional)</label>
                  <input type="text" class="form-control" id="cname" name="company" placeholder="Company Name">
                </div>
                <div class="form-group">
                  <label for="country">Country / Region *</label>
                  <select class="basic_select" id="country">
                    <option value="1">United State America</option>
                    <option value="2">Country 2</option>
                    <option value="3">Country 3</option>
                    <option value="4">Country 4</option>
                    <option value="5">Country 5</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="address">Street Address *</label>
                  <input type="text" class="form-control" id="address" name="address" placeholder="32 Madison Street">
                </div>
                <div class="form-group">
                  <label for="address">Apartment / Unit (Optional)</label>
                  <input type="text" class="form-control" id="unit" name="unit" placeholder="Unit 4">
                </div>
                <div class="form-group">
                  <label for="address">Post Code / Zip *</label>
                  <input type="text" class="form-control" id="zip" name="zip" placeholder="909832">
                </div>
                <div class="form-group">
                  <label for="city">Town / City *</label>
                  <select class="basic_select" id="city">
                    <option value="1">New York</option>
                    <option value="2">Washington DC</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="state">State *</label>
                  <select class="basic_select" id="state">
                    <option value="1">Utah</option>
                    <option value="2">Arizona</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input type="text" class="form-control" id="phone" name="phone" placeholder="012345">
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" name="email" placeholder="mail@domain.com">
                </div>

                <div class="additional_info mt-5">
                  <h4 class="widget-title">Additional Information <span class="title-line"></span></h4>
                  <div class="form-group">
                    <label for="notes">Order Notes (Optional)</label>
                    <textarea id="notes" name="notes" class="form-control" placeholder="Notes About your order & delivery"></textarea>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="place_order">
                  <h4 class="widget-title">Your Order <span class="title-line"></span></h4>
                  <ul>
                    <li class="totalvalue"><span class="text">Product</span> <span class="value">Price</span></li>
                    <li><span class="text">Green Armchair x 1</span> <span class="value">$21</span></li>
                    <li><span class="text">Black vase x 1</span> <span class="value">$29</span></li>
                    <li><span class="text">Decor Plant x 1</span> <span class="value">$50</span></li>
                    <li><span class="text">Brown Lamp x 1</span> <span class="value">$40</span></li>
                    <li><span class="text">Center Table x 1</span> <span class="value">$30</span></li>
                    <li class="totalvalue"><span class="text">Subtotal</span> <span class="value">$170</span></li>
                    <li class="totalvalue">
                      <span class="text">Shipping</span>
                      <div class="form-group">
                        <label class="radio_circle">Flat Rate
                          <input type="radio" :checked="true" name="shipping" value="cash">
                          <span class="checkmark"></span>
                        </label>
                        <label class="radio_circle">Free Shipping
                          <input type="radio" name="shipping" value="card">
                          <span class="checkmark"></span>
                        </label>
                        <label class="radio_circle">Local Pickup
                          <input type="radio" name="shipping" value="online">
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li class="totalvalue"><span class="text">Total</span> <span class="value">$250</span></li>
                  </ul>
                  <div class="form-group paymentmethod">
                    <label class="radio_circle">Direct Bank Transfer
                      <input type="radio" :checked="true" name="paymethod" value="cash">
                      <span class="checkmark"></span>
                      <span class="text">Make your payment directly into our bank account. Please use your
													Order ID as the payment reference. Your order will not be shipped
													until the funds have cleared in our account.</span>
                    </label>
                    <label class="radio_circle">Check Payment
                      <input type="radio" name="paymethod" value="card">
                      <span class="checkmark"></span>
                      <span class="text">Your personal data will be used to process your order, support your
													experience throughout this website, and for other purposes described
													in our privacy policy.</span>
                    </label>
                  </div>
                  <div class="btn_group">
                    <input class="btn white" type="submit" value="Place Order" name="submit">
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </PageHeaderLayout>
</template>
<script setup lang="ts">
import PageHeaderLayout from "@/ui/templates/PageLayout.vue";
</script>