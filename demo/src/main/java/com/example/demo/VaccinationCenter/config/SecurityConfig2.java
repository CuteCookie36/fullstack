// package com.example.demo.VaccinationCenter.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.http.SessionCreationPolicy;

// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// // import org.springframework.security.provisioning.InMemoryUserDetailsManager;
// // import org.springframework.security.provisioning.UserDetailsManager;
// import org.springframework.security.web.SecurityFilterChain;

// import static org.springframework.security.config.Customizer.withDefaults;


// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {
//     //private static final Logger log = LoggerFactory.getLogger(SecurityConfig.class);
    
   
//     @Bean
//     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//         http.authorizeHttpRequests((authz) -> authz
//                     .requestMatchers("/api").permitAll()
//                     .requestMatchers("/private").authenticated()
//                     )
//         .httpBasic(withDefaults())
//                 .cors().disable()
//                 .csrf().disable() //Desactivation de la protection csrf
//         .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);//On rend les session stateless      
        
//         return http.build();
//     }

//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }

// }
