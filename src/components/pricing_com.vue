<template>
  <div class="pricing-section section-pad">
    <div class="container">
      <h2 class="text-center"> {{ $t('common.simple') }} </h2>
      <p class="main-p text-center">
        {{ $t('common.smallLorem') }}
      </p>
      <div class="my-tabs mt-4">
        <div class="nav slider_nav" id="nav-tab" role="tablist">
          <a
            class="slider_nav_link default_link active"
            id="nav-message-tab"
            data-toggle="tab"
            href="#nav-message"
            role="tab"
            aria-controls="nav-message"
            aria-selected="true"
            > {{ $t('common.month') }} </a
          >
          <a
            class="slider_nav_link default_link qestions"
            id="nav-Questions-tab"
            data-toggle="tab"
            href="#nav-Questions"
            role="tab"
            aria-controls="nav-Questions"
            aria-selected="false"
            > {{ $t('common.year') }} </a
          >
          <span class="after_span"></span>
        </div>
      </div>
      <div class="tab-content mb-3" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-message"
          role="tabpanel"
          aria-labelledby="nav-message-tab"
        >
          <div class="monthly mt-5">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12 mb-3">
                <div class="price-box">
                  <div class="contain-all">
                    <div class="pay-type color-main mb-3"> {{ $t('common.sliver') }} </div>
                    <div class="mon-pay mb-2">0$/Month</div>
                    <p class="gray-col land-p">
                      Lorem ipsum dolor sit amet, elit,
                    </p>
                    <hr />
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                  </div>
                  <div class="flex-groupme">
                    <a href="#" class="main-btn up"> {{ $t('common.choosePlan') }} </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12 mb-3">
                <div class="price-box">
                  <div class="contain-all">
                    <div class="pay-type color-main mb-3"> {{ $t('common.gold') }} </div>
                    <div class="mon-pay mb-2">14$/Month</div>
                    <p class="gray-col land-p">
                      Lorem ipsum dolor sit amet, elit,
                    </p>
                    <hr />
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                  </div>
                  <div class="flex-groupme">
                    <a href="#" class="main-btn up"> {{ $t('common.choosePlan') }} </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12 mb-3">
                <div class="price-box">
                  <div class="contain-all">
                    <div class="pay-type color-main mb-3"> {{ $t('common.prem') }} </div>
                    <div class="mon-pay mb-2">40$/Month</div>
                    <p class="gray-col land-p">
                      Lorem ipsum dolor sit amet, elit,
                    </p>
                    <hr />
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                  </div>
                  <div class="flex-groupme">
                    <a href="#" class="main-btn up"> {{ $t('common.choosePlan') }} </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-Questions"
          role="tabpanel"
          aria-labelledby="nav-Questions-tab"
        >
          <div class="monthly mt-5">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12 mb-3">
                <div class="price-box">
                  <div class="contain-all">
                    <div class="pay-type color-main mb-3"> {{ $t('common.sliver') }} </div>
                    <div class="mon-pay mb-2">0$/Year</div>
                    <p class="gray-col land-p">
                      Lorem ipsum dolor sit amet, elit,
                    </p>
                    <hr />
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                  </div>
                  <div class="flex-groupme">
                    <a href="#" class="main-btn up"> {{ $t('common.choosePlan') }} </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12 mb-3">
                <div class="price-box">
                  <div class="contain-all">
                    <div class="pay-type color-main mb-3"> {{ $t('common.gold') }} </div>
                    <div class="mon-pay mb-2">100$/Year</div>
                    <p class="gray-col land-p">
                      Lorem ipsum dolor sit amet, elit,
                    </p>
                    <hr />
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                  </div>
                  <div class="flex-groupme">
                    <a href="#" class="main-btn up"> {{ $t('common.choosePlan') }} </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12 mb-3">
                <div class="price-box">
                  <div class="contain-all">
                    <div class="pay-type color-main mb-3"> {{ $t('common.prem') }} </div>
                    <div class="mon-pay mb-2">400$/Year</div>
                    <p class="gray-col land-p">
                      Lorem ipsum dolor sit amet, elit,
                    </p>
                    <hr />
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                    <div class="explain-row mb-3">
                      <div class="left-circle">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <p class="gray-col">Lorem ipsum dolor sit amet,</p>
                    </div>
                  </div>
                  <div class="flex-groupme">
                    <a href="#" class="main-btn up"> {{ $t('common.choosePlan') }} </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-groupme">
        <a href="#" class="main-btn up"> {{ $t('common.more') }} </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>