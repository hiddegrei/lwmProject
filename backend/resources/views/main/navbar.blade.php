<nav class="navbar is-primary  has-text-white border-bottom border-primary fixed-top"
     style="background-color: #00385A;">
    <div class="container">
        <div class="navbar-brand">
            <a href="/" class="navbar-item">
                <img src="https://lwmdev.service-now.com/f1580754dbf8b700a797298a48961940.iix" alt="Lambwaston img"
                     class="img-fluid position-absolute start-0" style="width: 110px">
            </a>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu " id="navMenu">

            <div class="navbar-menu " id="navMenu">

                <div class="navbar-start">
                    <div class="dropdown">
                        <a href="/todos">
                        <button class="dropbtn navbar-item px-4 text-decoration-none navHover">To Dos</button>
                        </a>
                        <!-- <div class="dropdown-content">
                            <a href="#">Eat</a>
                            <a href="#">Pet dog</a>
                            <a href="#">Potato</a>
                        </div> -->
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn navbar-item px-4 text-decoration-none navHover">My Tickets</button>
                        <div class="dropdown-content">
                            <a href="#">Train ticket</a>
                            <a href="#">Car ticket</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn navbar-item px-4 text-decoration-none navHover">Knowledge</button>
                        <div class="dropdown-content">
                            <a href="#">Book of all</a>
                            <a href="#">Book of nothing</a>
                            <a href="#">Book of Book</a>
                        </div>
                    </div>

                <div class="dropdown">
                <button class="dropbtn navbar-item px-4 text-decoration-none navHover">Services</button>
                 <div class="dropdown-content">
                    <a href="/services/businesssupport">Business support</a>
                    <a href="/services/facilities">Facilities</a>
                    <a href="/service/facilities">Finance</a>
                    <a href="/services/homeoffice">Home office</a>
                    <a href="/services/hrpayroll">HR & Payroll</a>
                    <a href="/services/itservices">IT services</a>
                    <a href="/services/masterdata">Masterdata</a>
                </div>
                </div>

                    <div class="dropdown">
                        <button class="dropbtn navbar-item px-4 text-decoration-none navHover">System Status</button>
                        <div class="dropdown-content">
                            <a href="#">Business support</a>
                            <a href="#">Facilities</a>
                            <a href="#">Finance</a>
                            <a href="#">Home office</a>
                            <a href="#">HR & Payroll</a>
                            <a href="#">IT services</a>
                            <a href="#">Masterdata</a>
                        </div>
                    </div>


                    <div class="dropdown">
                        <button class="dropbtn navbar-item px-4 text-decoration-none navHover">GRC</button>
                        <div class="dropdown-content">
                            <a href="#">Wat is GRC?</a>
                        </div>
                    </div>


                    <div class="dropdown">
                        <button class="dropbtn navbar-item px-4 text-decoration-none navHover">Cart</button>
                        <div class="dropdown-content">
                            <a href="#">Items</a>
                            <a href="#">Buy</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn navbar-item px-4 text-decoration-none navHover">Quick Guide</button>
                        <div class="dropdown-content">
                            <a href="#">You have no quick guides</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"
            id="americanFlag">
            <div class="dropdown">
                        <button class="dropbtn navbar-item px-4 text-decoration-none navHover">Hi, {{ Auth::user()->name }}</button>
                        <div class="dropdown-content">
                        <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                           
                        </div>
                    </div>
        <!-- <div class="text-light">Saif el potato</div> -->
        
</nav>


