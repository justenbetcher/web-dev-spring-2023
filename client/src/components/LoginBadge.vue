<script setup lang="ts">
    import { ref } from 'vue';
    import { useSession , login} from '@/model/session';

    const session = useSession();
</script>

<template>

    <div class="navbar-item" v-if="session.user">
        Wecome, {{  session.user.name }}
        (<a @click="session.user=null">logout</a>)
	</div>

    <div class="navbar-item" v-else>
				<a href="#" class="button is-primary" @click="login">
					<span class="icon">
						<i class="fas fa-user"></i>
					</span>
					<strong>Log In</strong>
				</a>

                <a href="#" class="button is-light">
					<span class="icon">
						<i class="fas fa-user-plus"></i>
					</span>
					<strong>Sign Up</strong>
				</a>

			</div>

			
</template>


<style scoped>

</style>