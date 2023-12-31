package com.example.demo.VaccinationCenter.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.security.config.Customizer.withDefaults;


@Configuration
@EnableWebSecurity
public class SecurityConfig {
    //private static final Logger log = LoggerFactory.getLogger(SecurityConfig.class);
    
   
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests((authz) -> authz
                        .requestMatchers("/api/**").permitAll()
                        //.requestMatchers("/api/private/**").authenticated()
        )
                .httpBasic(withDefaults())
                //.addFilter(new JwtFilter())
                .cors(cors -> cors.disable())
                .csrf(csrf -> csrf.disable()) //Desactivation de la protection csrf
                .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS)); //On rend les session stateless      
        
        return http.build();
    }

    //  @Bean
    // public SecurityFilterChain filterChain(HttpSecurity http, UserDetailsService userDetailsService) throws Exception {
    //      http
    //              .authorizeHttpRequests((authz) -> authz.anyRequest().authenticated())
    //              .httpBasic(withDefaults())
    //              .cors(cors -> cors.disable())
    //              .csrf(csrf -> csrf.disable()) //Desactivation de la protection csrf
    //              .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS));//On rend les session stateless
    //     return http.build();
    // }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
